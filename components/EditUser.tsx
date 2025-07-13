"use client";

import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet";

const EditUser = () => {
  return (
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-4">Edit User</SheetTitle>
          <SheetDescription>
            Let's create a form next.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
  );
};

export default EditUser;
