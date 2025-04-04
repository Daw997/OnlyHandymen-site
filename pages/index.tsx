import Image from 'next/image';

export default function Home() {
  return (
    <main style={{
      padding: 40,
      backgroundColor: '#0A1F44',
      color: '#F8C6D0',
      fontFamily: 'sans-serif',
      minHeight: '100vh'
    }}>
      {/* Logo + Tittel */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
        <Image src="/logo.png" alt="OnlyHandymen Logo" width={64} height={64} />
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>OnlyHandymen</h1>
      </div>

      {/* Introduksjon */}
      <p style={{ maxWidth: 600 }}>
        Real men. Real skills. Real sexy. Discover mechanics, cowboys, electricians and more.
      </p>

      {/* Kategorier */}
      <ul style={{ marginTop: 20 }}>
        <li>🔧 Mechanic – Greasy, gritty, and ready to fix anything</li>
        <li>🤠 Cowboy – Rough, romantic, and always in control</li>
        <li>🚿 Plumber – Comes when things get messy</li>
        <li>🔌 Electrician – Lights up your day and your night</li>
      </ul>

      <p style={{ marginTop: 30 }}>
        Who needs another guy behind a screen when you can have a man who gets his hands dirty?
      </p>
    </main>
  );
}

