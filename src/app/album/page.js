import Image from "next/image";
import logo from '@/assets/logo.png';

const AlbumPage = () => {
    return(
        <div>
            <h1 className="text-2xl">Using Image component</h1>
             <Image src={logo} 
             width={400}
             height={400}
             alt="Album Image"/>

             
        </div>
    )
}
export default AlbumPage;