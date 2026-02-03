import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-8fe3f579/health", (c) => {
  return c.json({ status: "ok", version: "1.0.1" });
});

// Create initial user (signup endpoint)
app.post("/make-server-8fe3f579/signup", async (c) => {
  try {
    const { email, password, name } = await c.req.json();
    
    console.log('📝 Signup request received:', { email, name, passwordLength: password?.length });
    
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );
    
    // Check if user already exists
    const { data: existingUsers, error: listError } = await supabase.auth.admin.listUsers();
    
    if (!listError && existingUsers?.users) {
      const userExists = existingUsers.users.find(u => u.email === email);
      if (userExists) {
        console.log('ℹ️ User already exists:', email);
        return c.json({ 
          success: true, 
          message: 'User already exists',
          user: { id: userExists.id, email: userExists.email }
        });
      }
    }
    
    console.log('🔨 Creating new user...');
    
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });
    
    if (error) {
      console.error('❌ Signup error:', error);
      return c.json({ error: 'Failed to create user', details: error.message }, 400);
    }
    
    console.log('✅ User created successfully:', data.user?.email);
    return c.json({ success: true, user: data.user });
  } catch (error) {
    console.error('❌ Signup error:', error);
    return c.json({ error: 'Failed to create user', details: String(error) }, 500);
  }
});

// Get user's lesson progress (protected route)
app.get("/make-server-8fe3f579/progress/:userId", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    console.log('📊 Progress request received:', {
      userId: c.req.param("userId"),
      hasToken: !!accessToken,
      tokenPrefix: accessToken?.substring(0, 20) + '...'
    });
    
    // Verify user is authenticated
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '', // Changed to ANON_KEY for client tokens
    );
    
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    console.log('🔍 Token validation:', {
      hasUser: !!user,
      userId: user?.id,
      error: error?.message
    });
    
    if (!user || error) {
      console.error('❌ Unauthorized access to progress:', error?.message);
      return c.json({ error: 'Unauthorized', details: error?.message }, 401);
    }
    
    const userId = c.req.param("userId");
    const progressData = await kv.getByPrefix(`progress:${userId}:`);
    
    console.log('✅ Progress loaded:', {
      userId,
      itemCount: progressData.length
    });
    
    // Transform array of {key, value} to a simple object
    const progress: Record<string, boolean> = {};
    progressData.forEach((item: any) => {
      const lessonId = item.key.split(':')[2]; // Extract lesson ID from key
      progress[lessonId] = item.value;
    });
    
    return c.json({ progress });
  } catch (error) {
    console.error('❌ Error getting progress:', error);
    return c.json({ error: 'Failed to get progress', details: String(error) }, 500);
  }
});

// Mark lesson as complete (protected route)
app.post("/make-server-8fe3f579/progress/:userId/:lessonId", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    console.log('📝 Mark complete request:', {
      userId: c.req.param("userId"),
      lessonId: c.req.param("lessonId"),
      hasToken: !!accessToken
    });
    
    // Verify user is authenticated
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '', // Changed to ANON_KEY for client tokens
    );
    
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user || error) {
      console.error('❌ Unauthorized mark complete:', error?.message);
      return c.json({ error: 'Unauthorized', details: error?.message }, 401);
    }
    
    const userId = c.req.param("userId");
    const lessonId = c.req.param("lessonId");
    const key = `progress:${userId}:${lessonId}`;
    
    await kv.set(key, true);
    
    console.log('✅ Lesson marked complete:', { userId, lessonId });
    return c.json({ success: true, lessonId, completed: true });
  } catch (error) {
    console.error('❌ Error saving progress:', error);
    return c.json({ error: 'Failed to save progress', details: String(error) }, 500);
  }
});

// Unmark lesson (optional, for testing or reset) (protected route)
app.delete("/make-server-8fe3f579/progress/:userId/:lessonId", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    console.log('🗑️ Delete progress request:', {
      userId: c.req.param("userId"),
      lessonId: c.req.param("lessonId"),
      hasToken: !!accessToken
    });
    
    // Verify user is authenticated
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '', // Changed to ANON_KEY for client tokens
    );
    
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user || error) {
      console.error('❌ Unauthorized delete progress:', error?.message);
      return c.json({ error: 'Unauthorized', details: error?.message }, 401);
    }
    
    const userId = c.req.param("userId");
    const lessonId = c.req.param("lessonId");
    const key = `progress:${userId}:${lessonId}`;
    
    await kv.del(key);
    
    console.log('✅ Progress deleted:', { userId, lessonId });
    return c.json({ success: true, lessonId, completed: false });
  } catch (error) {
    console.error('❌ Error deleting progress:', error);
    return c.json({ error: 'Failed to delete progress', details: String(error) }, 500);
  }
});

Deno.serve(app.fetch);