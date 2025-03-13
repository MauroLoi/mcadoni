import React from "react";

function CardPreparati({ img, title, description, ingredient, allerg }) {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-slate-50 p-4 flex flex-col gap-2">
            
            <img className="w-full h-48 object-cover rounded-t-xl" src={img} alt={title} />

            
            <h4 className="text-xl font-bold mt-2">{title}</h4>

            
            <p className="text-gray-600">{description}</p>

            {ingredient.length > 0 && (
                <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                    {ingredient.map((ing, index) => (
                        <li key={index}>{ing}</li>
                    ))}
                </ul>
            )}

            {allerg.length > 0 && (
                <div className="mt-2 flex gap-2 justify-end">
                    {allerg.map((allergen, index) => (
                        <div key={index} className="w-5 h-5" title={allergen.name}>
                            {React.isValidElement(allergen.icon) ? allergen.icon : null}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CardPreparati;
