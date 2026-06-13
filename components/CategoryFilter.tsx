import Button from "./Button"

export default function CategoryFilter() {
    return (
        <div className="flex justify-start items-start w-full">
            <Button className="m-2 p-2 pl-8 pr-8 rounded-xl bg-gray-200 font-outfit">
                Art
            </Button>

            <Button className="m-2 p-2 pl-8 pr-8 rounded-xl bg-gray-200 font-outfit">
                3D Modeling
            </Button>

            <Button className="m-2 p-2 pl-8 pr-8 rounded-xl bg-gray-200 font-outfit">
                Scripting
            </Button>

            <Button className="m-2 p-2 pl-8 pr-8 rounded-xl bg-gray-200 font-outfit">
                Animation
            </Button>

            <Button className="m-2 p-2 pl-8 pr-8 rounded-xl bg-gray-200 font-outfit">
                UI/UX
            </Button>

            <Button className="m-2 p-2 pl-8 pr-8 rounded-xl bg-gray-200 font-outfit">
                Illustration
            </Button>
        </div>
    )
}