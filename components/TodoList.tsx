"use client";

import { ScrollArea } from "./ui/scroll-area";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  const todos = [
    { id: "todo-1", text: "Walk the dog" },
    { id: "todo-2", text: "Buy groceries" },
    { id: "todo-3", text: "Read a book" },
    { id: "todo-4", text: "Write some code" },
    { id: "todo-5", text: "Workout" },
    { id: "todo-6", text: "Cook dinner" },
    { id: "todo-7", text: "Clean the house" },
    { id: "todo-8", text: "Prepare for the meeting" },
    { id: "todo-9", text: "Call a friend" },
    { id: "todo-10", text: "Plan the weekend" },
  ];

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="space-y-2 pr-4">
          {todos.map((todo) => (
            <Card key={todo.id} className="shadow-sm">
              <CardContent className="px-4">
                <div className="flex items-center gap-4">
                  <Checkbox id={todo.id} />
                  <Label htmlFor={todo.id} className="font-medium">
                    {todo.text}
                  </Label>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
