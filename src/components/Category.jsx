export default function Category({category}) {

    const { icono, nombre, id } = category;

  return (
    <div className="flex gap-2 items-center bg-amber-500 hover:bg-amber-600 ease-linear duration-300 transition-colors cursor-pointer text-white p-2 rounded">
        <img src={`/img/icono_${icono}.svg`} className="w-10" alt="Imgen " />
        <p className="font-medium text-sm">{nombre}</p>
    </div>
    
  )
}
