import supabase from "../services/supabase";

export async function getAllMovies(searchTerm = "") {
  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .ilike("title", `%${searchTerm}%`);

  if (error) {
    console.error(error);
    throw new Error("Could not get all movies");
  }
  return data;
}

export async function getTrendingMovies() {
  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .eq("isTrending", true);

  if (error) {
    console.error(error);
    throw new Error("Could not get trending movies");
  }

  return data;
}

export async function getOnlyMovies(searchTerm = "") {
  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .eq("category", "Movie")
    .ilike("title", `%${searchTerm}%`);

  if (error) {
    console.error(error);
    throw new Error("Could not get movies");
  }
  return data;
}

export async function getOnlySeries(searchTerm = "") {
  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .eq("category", "TV Series")
    .ilike("title", `%${searchTerm}%`);

  if (error) {
    console.error(error);
    throw new Error("Could not get Tv Series");
  }
  return data;
}

export async function getBookmarkedShows() {
  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .eq("isBookmarked", true);

  if (error) {
    console.error(error);
    throw new Error("Could not get Bookmarked Shows");
  }
  return data;
}

export async function toggleBookmark(id, obj) {


  const { data, error } = await supabase
    .from("movies")
    .update(obj)
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Bookmark could not be updated");
  }

  return data;
}
