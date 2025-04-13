import { Link } from "react-router-dom";

const BookCard = ({ info }) => {
    return (
        <div className="w-full flex gap-4 border-2 border-white h-fit rounded-xl overflow-hidden bg-gray-900/80 relative">
            <div className="left shrink-0">
                <img
                    loading="lazy"
                    className="w-44 h-44 object-cover object-center"
                    src={`${info.cover}`}
                    alt=""
                />
            </div>
            <div className="right flex flex-col gap-2 p-4 pl-0">
                <h4 className="line-clamp-1">{info.title}</h4>
                <p className="line-clamp-2 opacity-70 text-sm">
                    {info.description}
                </p>
                <p className="line-clamp-1 opacity-70 text-sm">
                    By - {info.author}
                </p>

                <Link className="mt-auto" to={`/book/${info.id}`}>
                    <div className="hover:underline cursor-pointer text-sm">
                        View Details
                    </div>
                </Link>
            </div>

            <span className="px-4 py-2 bg-gray-950/90 absolute left-2 bottom-2 rounded-full text-sm">
                ⭐ {info.rating}
            </span>
        </div>
    );
};

export default BookCard;
