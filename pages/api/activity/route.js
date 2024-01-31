import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Activity from "../../../modals/activity";

export default async function POST(request) {
  const { content, date, InscriptionId, price, tag, tx, type } = request.body;
  console.log("connecting DB");
  await connectMongoDB();
  console.log("connected DB");
  await Activity.create({ content, date, InscriptionId, price, tag, tx, type });
  return NextResponse.json({
    message: "Activity is created successfully",
    status: 201,
  });
}
