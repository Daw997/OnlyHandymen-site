type Props = {
  name: string;
  category: string;
  emoji: string;
};

export default function HandymanCard({ name, category, emoji }: Props) {
  return (
    <div style={{
      border: '2px solid #F8C6D0',
      padding: 20,
      borderRadius: 10,
      backgroundColor: '#FAF7F5',
      color: '#0A1F44',
      marginBottom: 16,
      maxWidth: 300
    }}>
      <h3 style={{ fontSize: 20 }}>{emoji} {name}</h3>
      <p style={{ fontStyle: 'italic' }}>{category}</p>
    </div>
  );
}
