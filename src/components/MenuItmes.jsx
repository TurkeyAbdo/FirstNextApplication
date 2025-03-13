import Link from "next/link";

function MenuItems({title, address, Icon}) {
    return ( 
        <>
            <Link href={address} className="hover:text-amber-500 flex">
                <Icon className="text-2xl"/>
                <p className="uppercase hidden sm:inline ml-2">{title}</p>
            </Link>
        </>
    );
}

export default MenuItems;