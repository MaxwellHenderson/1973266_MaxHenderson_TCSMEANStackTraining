var savedBlogs = [];
var blogCount = 0;

/*
This function runs when the page loads. It attempts to retrieve any
posts saved in the localStorage. If there is stored posts, it retrieves
them with retrieveBlogs() to save to this instance and then calls 
fillBlogContainer to load the information into the page
*/
var initializeBlogs = () => {
  console.log("initialized");
  if (localStorage.getItem("savedBlogs")) {
    retrieveBlogs();
    fillBlogContainer();
  } else {
    console.log("failure");
  }
};

/*Helper function. Takes the current savedBlogs array and loops through it,
creating an new DOM element, replacing its contents with the saved html,
and then changing the id to correspond with its position on the page. This
id is necessary for the deletePost() function to work
*/
var fillBlogContainer = () => {
  blogCount = 0;
  var blogContainer = document.getElementById("blogContainer");
  blogContainer.innerHTML = "";
  savedBlogs.forEach((blog) => {
    const post = document.createElement("div");
    blogContainer.appendChild(post);
    post.outerHTML = blog;
    blogContainer.lastChild.id = blogCount;
    blogCount++;
  });
};

/*
Simple helper function. Just assigns the global variable to be the array
that is stored in local storage
*/
var retrieveBlogs = () => {
  savedBlogs = JSON.parse(localStorage.getItem("savedBlogs"));
};

/*
This helper function is called whenever a new blog post is created.
It takes in the blogObject and pushes the information as a string
into the savedBlog array, then saves that to the localStorage
*/
var saveBlogs = (blogObject) => {
  savedBlogs.push(blogObject.outerHTML);
  localStorage.setItem("savedBlogs", JSON.stringify(savedBlogs));
};

/*
Helper function for deleting a blog post. This takes in an id of a post
given by the post when the button is clicked. This id is a zero-indexed
value representing which child of the parent element the post is. The
function then removes that element in the savedBlogs array, saves the new
trimmed array to localStorage, then re-renders the page with the new
saved data
*/
var deleteBlog = (id) => {
  savedBlogs.splice(id, 1);
  localStorage.setItem("savedBlogs", JSON.stringify(savedBlogs));
  fillBlogContainer();
};

/*
This helper function grabs the values of the form and passes them to
createNewBlogPost(). It then saves that new post and re-renders the page
*/
var postBlog = async () => {
  const form = document.getElementById("addBlogForm");
  var title = document.getElementById("blogTitleEntry").value;
  var body = document.getElementById("blogContentEntry").value;
  var image = await getImgFile();

  const newPost = createNewBlogPost(title, body, image);

  saveBlogs(newPost);
  fillBlogContainer();

  form.reset();
};

/*
This function takes in post information and creates a new
DOM element with all necessary attributes, returning the 
newly created dom element
*/
var createNewBlogPost = (title, body, image) => {
  //Conatiner div for the post
  const newPost = document.createElement("div");
  newPost.setAttribute("class", "card col-md-3");
  newPost.setAttribute("id", blogCount);
  blogCount++;

  //Title for the post
  const newPostTitle = document.createElement("h1");
  newPostTitle.setAttribute("class", "card-title");
  newPostTitle.innerHTML = title;

  //Body text for the post
  const newPostBody = document.createElement("div");
  newPostBody.setAttribute("class", "card-body overflow-auto");
  newPostBody.innerHTML = body;

  //Image for the post
  const newPostImage = document.createElement("img");
  newPostImage.setAttribute("class", "card-img-top img-fluid");
  newPostImage.setAttribute("src", image);

  //Delete button for the post
  const postDeleteButton = document.createElement("button");
  postDeleteButton.setAttribute("type", "button");
  postDeleteButton.setAttribute("class", "btn btn-warning");
  postDeleteButton.setAttribute("onclick", "deleteBlog(this.parentNode.id)");
  postDeleteButton.innerHTML = "Delete Post";

  //Append all of the elements to the post
  newPost.appendChild(newPostImage);
  newPost.appendChild(newPostTitle);
  newPost.appendChild(newPostBody);
  newPost.appendChild(postDeleteButton);

  return newPost;
};

/*
This function gave me the most trouble by far, as I was running into
issues with the rest of the function not waiting on the callback from
FileReader. Finally figured out had to use a Promise.

This function reads the file from the form and turns it into a base64
string representation of the file data, allowing the DOM to page to
render it without having to have access to the original image, thus allowing
the app to save the image in localStorage
*/
var getImgFile = async () => {
  const file = document.querySelector("input[type=file]").files[0];

  const get64 = (file2) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file2);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  var imgURL = await get64(file);

  return imgURL;
};
