// Script to initialize the user account
// This should be run once to create the initial user

import { projectId, publicAnonKey } from '/utils/supabase/info';

export async function initializeUser() {
  const serverUrl = `https://${projectId}.supabase.co/functions/v1/make-server-8fe3f579`;
  
  console.log('🔧 Initializing user...');
  console.log('📧 User credentials:', {
    email: 'aditiux@aditidesign.com',
    username: 'Aditiux',
    passwordLength: 'Aditi2026'.length
  });
  
  try {
    const response = await fetch(`${serverUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`,
      },
      body: JSON.stringify({
        email: 'aditiux@aditidesign.com',
        password: 'Aditi2026',
        name: 'Aditiux',
      }),
    });

    const data = await response.json();
    
    console.log('📬 Signup response:', { status: response.status, data });
    
    if (response.ok) {
      console.log('✅ User created successfully:', data);
      return true;
    } else {
      // User may already exist, which is fine
      if (data.error && (data.details?.includes('already') || data.details?.includes('exists'))) {
        console.log('ℹ️ User already exists, skipping creation');
        return true;
      }
      console.error('❌ Failed to create user:', data);
      return false;
    }
  } catch (error) {
    console.error('❌ Error creating user:', error);
    return false;
  }
}