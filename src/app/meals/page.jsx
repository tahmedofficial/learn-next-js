import Meals from "@/components/Meals";

export const metadata = {
    title: { absolute: "Meals" },
    description: "Meals",
    keywords: ["Meals", "Meals page"]
};

const page = () => {

    return (
        <div>
            <h1>Chose your meals</h1>
            <Meals></Meals>
        </div>
    );
};

export default page;