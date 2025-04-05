'use client';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useState } from 'react';

export default function MyToolbox() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  async function handleUpload(event: any) {
    const file = event.target.files[0];
    if (!file || !session) return;

    const fileExt = file.name.split('.').pop();
    const fileName = `${session.user.id}_${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    setUploading(true);

    const { error } = await supabase.storage
      .from('onlyhandymen-files')
      .upload(filePath, file);

    if (error) {
      alert('Upload error: ' + error.message);
    } else {
      const { data } = supabase.storage.from('onlyhandymen-files').getPublicUrl(filePath);
      setFileUrl(data.publicUrl);
    }

    setUploading(false);
  }

  return (
    <main style={{ padding: 40, backgroundColor: '#0A1F44', color: '#F8C6D0', fontFamily: 'sans-serif', minHeight: '100vh' }}>
      <h1>🧰 My Toolbox</h1>

      {!session ? (
        <div style={{ maxWidth: 400, backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            providers={[]}
          />
        </div>
      ) : (
        <div style={{ marginTop: 20 }}>
          <p>Logged in as: <strong>{session.user.email}</strong></p>

          <input type="file" onChange={handleUpload} disabled={uploading} />
          {uploading && <p>Uploading...</p>}

          {fileUrl && (
            <div style={{ marginTop: 20 }}>
              <p>Uploaded:</p>
              <img src={fileUrl} alt="Uploaded content" style={{ maxWidth: 300, borderRadius: 8 }} />
            </div>
          )}

          <button
            onClick={() => supabase.auth.signOut()}
            style={{
              marginTop: 20,
              padding: '8px 16px',
              backgroundColor: '#F8C6D0',
              color: '#0A1F44',
              border: 'none',
              borderRadius: 6
            }}
          >
            Log out
          </button>
        </div>
      )}
    </main>
  );
}
