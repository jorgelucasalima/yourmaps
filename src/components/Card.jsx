export default function Card({ name, email, city }) {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden ">
      <div className="p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-2">{name}</h2>
        <p className="text-gray-700 mb-2"><span className="font-semibold">E-mail:</span> {email}</p>
        <p className="text-gray-700 mb-2"><span className="font-semibold">Cidade:</span> {city}</p>
      </div>
    </div>
  )
}