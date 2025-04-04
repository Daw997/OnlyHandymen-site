'use client';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function MyToolbox() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <main style={{ padding: 40, backgroundColor: '#0A1F44', color: '#F8C6D0', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem' }}>🧰 My Toolbox</h1>

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
