export default function FormInput({ label, register, name, errors, attributes, validate }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm mb-2">{label}</label>
      <input
        {...register(name, validate)} 
        {...attributes}
        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
          errors?.[name] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
        }`}
      />
      <p className="text-red-500 text-sm mt-1 h-5">{errors?.[name]?.message || ''}</p>
    </div>
  );
}
