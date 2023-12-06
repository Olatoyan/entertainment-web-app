import supabase, { supabaseUrl } from "../services/supabase";

// const BASE_URL = "http://localhost:3001/movies";
const BASE_URL = "./data.json";

export async function getTrendingMovies() {
  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .eq("isTrending", true);

  let { data: movies, error: error2 } = await supabase
    .from("movies")
    .select("");

  console.log(data);

  return data;
}

export async function getTrendingMovie() {
  const response = await fetch(BASE_URL);
  const data = await response.json();

  const trendingData = data.filter((movie) => movie.isTrending);
  return trendingData;
}

export async function getAllMovie() {
  const { data, error } = await supabase.from("movies").select("*");

  return data;
}

export async function getAllMovies() {
  const response = await fetch(BASE_URL);
  const data = await response.json();

  return data;
}

// export async function toggleBookmark(id, bookmark) {
//   console.log("Toggle Bookmark - id:", id, "bookmark:", bookmark);

//   // Toggle the bookmark status
//   const { error: updateError } = await supabase
//     .from("movies")
//     .update(bookmark) // Update only the 'isBookmarked' field
//     .eq("id", id);

//   if (updateError) {
//     console.error("Error updating bookmark status:", updateError.message);
//     return null;
//   }

//   // Fetch the updated record separately
//   const { data: updatedData, error: fetchError } = await supabase
//     .from("movies")
//     .select("*")
//     .eq("id", id)
//     .single();

//   console.log("Updated Data:", updatedData);

//   if (fetchError) {
//     console.error("Error fetching updated record:", fetchError.message);
//     return null;
//   }

//   if (!updatedData) {
//     console.error("No matching record found for movieId:", id);
//     return null;
//   }

//   console.log("Bookmark status updated successfully.");
//   return updatedData;
// }

export async function toggleBookmark(id, obj) {
  console.log(obj);

  const { data, error } = await supabase
    .from("movies")
    .update(obj)
    .order("id", { ascending: true })
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Bookmark could not be updated");
  }

  return data;
}

// export async function toggleBookmark(title) {
//   const response = await fetch(BASE_URL);
//   const data = await response.json();

//   // const newData = data.map((movie) => {
//   //   if (movie.title === title) {
//   //     return { ...movie, isBookmarked: !movie.isBookmarked };
//   //   } else {
//   //     return movie;
//   //   }
//   // });

//   // Find the object with the specified title
//   const foundObject = data.find((obj) => obj.title === title);

//   // Toggle the bookmark state if the object is found
//   if (foundObject) {
//     foundObject.isBookmarked = !foundObject.isBookmarked;
//   }

//   console.log(foundObject);
//   // return newData;
//   // Update the data.json file on the server
//   // await updateDataJson(newData);

//   // Delete the existing data.json file on the server
//   // await fetch(BASE_URL, {
//   //   method: "DELETE",
//   // });

//   // const response2 = await fetch(BASE_URL, {
//   //   method: "POST",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   //   body: JSON.stringify(newData),
//   // });
//   // console.log(response2);
//   // console.log(newData);

//   // // Wait for the server's response after updating
//   // const updatedData = await response2.json();
//   // console.log(updatedData);

//   // // return updatedData;
//   // return newData;
// }

// export async function toggleBookmark(id, bookmark) {
//   // Fetch the current bookmark status
//   // const { data: currentData, error: currentError } = await supabase
//   //   .from("movies")
//   //   .select("isBookmarked")
//   //   .eq("id", movieId)
//   //   .single();

//   // console.log(currentData);

//   // if (currentError) {
//   //   console.error(
//   //     "Error fetching current bookmark status:",
//   //     currentError.message
//   //   );
//   //   return null;
//   // }

//   /*
//   mutationFn: ({ bookingId, breakfast }) =>
//       updateBooking(bookingId, {
//         isPaid: true,
//         status: "checked-in",
//         ...breakfast,
//       }),

//   if (addBreakfast) {
//     checkin({
//       bookingId,
//       breakfast: {
//         hasBreakfast: true,
//         extrasPrice: optionalBreakfastPrice,
//         totalPrice: totalPrice + optionalBreakfastPrice,
//       },
//     });
//   } else {
//     checkin({ bookingId, breakfast: {} });
//   }

//   export async function updateBooking(id, obj) {
//     const { data, error } = await supabase
//       .from("bookings")
//       .update(obj)
//       .eq("id", id)
//       .select()
//       .single();

//     if (error) {
//       console.error(error);
//       throw new Error("Booking could not be updated");
//     }
//     return data;
//   }
// */
//   // const { data: updatedData, error: updateError } = await supabase
//   // .from("movies")
//   // .upsert([{ id, isBookmarked: Boolean(bookmark) }])
//   // .single();

//   // console.log(movieId, obj);
//   console.log(bookmark);

//   // Toggle the bookmark status
//   const { data: updatedData, error: updateError } = await supabase
//     .from("movies")
//     .select("*")
//     .eq("id", id)
//     .single();

//   console.log(updatedData);
//   console.log("id", id);

//   if (updateError) {
//     console.error("Error updating bookmark status:", updateError.message);
//     return null;
//   }

//   if (!updatedData) {
//     console.error("No matching record found for movieId:", id);
//     return null;
//   }

//   console.log("Bookmark status updated successfully.");
//   return updatedData;
// }

async function updateDataOnServer(updatedData) {
  try {
    // Send a PUT request to update the data on the server
    await fetch(BASE_URL, {
      method: "PUT", // Use the appropriate HTTP method for updating data
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    console.log("Data updated on the server.");
  } catch (error) {
    console.error("Error updating data on the server:", error);
  }
}
