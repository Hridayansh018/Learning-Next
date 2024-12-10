//route

import { NextResponse } from "next/server";
import { ConnectDb } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";

// loading the database
const LoadDB = async () => {
  await ConnectDb();
};

LoadDB(); // Ensure DB connection

export async function GET(request) {
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos: todos });
}

export async function POST(request) {
  const { title, description } = await request.json();

  await TodoModel.create({
    title,
    description
  });

  return NextResponse.json({ msg: "TODO CREATED" });
}

export async function DELETE(request) {
    // Extract the mongoId from the query string in the request URL
    const mongoId = request.nextUrl.searchParams.get('mongoId');
    try {
      const deletedTodo = await TodoModel.findByIdAndDelete(mongoId);
  
      // If no Todo is found to delete, return a 404 status with a relevant message
      if (!deletedTodo) {
        return NextResponse.json({ msg: 'Todo not found' }, { status: 404 });
      }
  
      // Return a success response after deletion
      return NextResponse.json({ msg: 'TODO DELETED' });
    } catch (error) {
      // Handle any errors that might occur during the database operation
      console.error('Error deleting todo:', error);
      return NextResponse.json({ msg: 'Error deleting todo' }, { status: 500 });
    }
  }

  export async function PUT(request) {
    const mongoId = request.nextUrl.searchParams.get('mongoId');
    try {
      const updatedTodo = await TodoModel.findByIdAndUpdate(mongoId, {
        $set: { isCompleted: true }
      });
      return NextResponse.json({ msg: "TODO COMPLETED" });
    } catch (error) {
      console.error('Error completing todo:', error);
      return NextResponse.json({ msg: 'Error completing todo' }, { status: 500 });
    }
  }
