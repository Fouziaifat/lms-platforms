import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
  return (
    <div className="p-6">
      <Link href="/teacher/create">
        <Button variant="cyan">New courses</Button>
      </Link>
    </div>
  );
};
export default CoursesPage;
