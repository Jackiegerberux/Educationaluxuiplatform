/**
 * Robust clipboard copy utility.
 * 
 * The modern Clipboard API (navigator.clipboard.writeText) is blocked by
 * permissions policy in sandboxed/iframe environments. This utility uses
 * the textarea + execCommand('copy') approach which works reliably
 * across all environments.
 * 
 * Returns true if the copy succeeded, false otherwise.
 */
export function copyToClipboard(text: string): boolean {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  // Prevent scrolling to bottom of page
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  textarea.style.top = '-9999px';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  let success = false;
  try {
    success = document.execCommand('copy');
  } catch {
    success = false;
  } finally {
    document.body.removeChild(textarea);
  }

  return success;
}
