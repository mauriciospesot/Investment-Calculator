export default function Input({ label, type, value, name, onChange }) {
  return (
    <p>
      <label htmlFor="">{label}</label>
      <input
        value={value}
        name={name}
        type={type}
        onChange={(event) => onChange(event)}
      />
    </p>
  );
}
