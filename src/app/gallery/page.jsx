import Image from "next/image";

const page = () => {
    return (
        <div>
            <div>
                {
                    [1, 2, 5].map(img => (
                        <Image key={img} src={`/images/${img}.jpg`} alt="image" width="1080" height="1920" />
                    ))
                }
            </div>
        </div>
    );
};

export default page;