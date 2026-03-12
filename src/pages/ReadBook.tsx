import BookReader from "@/components/BookReader";
import SharingWarning from "@/components/SharingWarning";

const ReadBook = () => {
  return (
    <div className="min-h-screen green-gradient">
      <div className="pt-2">
        <SharingWarning />
      </div>
      <BookReader />
    </div>
  );
};

export default ReadBook;
