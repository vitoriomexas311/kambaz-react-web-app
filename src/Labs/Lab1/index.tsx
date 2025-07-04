export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and
        subsections. Each section is usually prefaced with a short title or
        heading that attempts to summarize the topic of the section it precedes.
        For instance this paragraph is preceded by the heading Heading Tags. The
        font of the section headings are usually larger and bolder than their
        subsection headings. This document uses headings to introduce topics
        such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags
        can be used to format plain text so that it renders in a browser as
        large headings. There are 6 heading tags for different sizes: h1, h2,
        h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest
        heading.
      </div>
      <h1>HTML Overview</h1>
      <p wd-p-1>
        HTML stands for hypertext markup language. it is the standard language
        for creating web pages.
      </p>
      <h2>HTML Elements</h2>
      <p wd-p-2>
        HTML elements are the building blocks of HTML pages. They are
        represented by tags.
      </p>
      <h3>HTML Tags</h3>
      <p wd-p-3>
        Tags are used to create elements. They always come in pairs: an opening
        tag and a closing tag.
      </p>
      <h4>HTML Attributes</h4>
      <p wd-p-4>
        Attributes provide additional information about elements. They are
        always included in the opening tag.
      </p>
      <h6>HTML Images</h6>
      <p wd-p-5>
        We can even put images, which can be embedded in HTML pages using the{" "}
        <img src="#" alt="image" /> tag.
      </p>
      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        how to make chicken broccoli and rice:
        <ol id="wd-pancakes">
          <li>preheat oven to 400 degrees.</li>
          <li>season chicken breasts with salt and pepper.</li>
          <li>place chicken in baking dish.</li>
          <li>add broccoli florets around chicken.</li>
          <li>drizzle with olive oil and garlic.</li>
          <li>bake for 25-30 minutes until chicken is cooked.</li>
          <li>cook rice according to package instructions.</li>
          <li>serve chicken and broccoli over rice.</li>
        </ol>
      </div>
      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender's Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>
      Your favorite books (in no particular order)
      <ul id="wd-your-books">
        <li>Steve Jobs</li>
        <li>The Art of War</li>
        <li>1984</li>
        <li>Brave New World</li>
      </ul>
      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>88</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>React</td>
              <td>2/24/21</td>
              <td>92</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>TypeScript</td>
              <td>3/3/21</td>
              <td>87</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>Node.js</td>
              <td>3/10/21</td>
              <td>91</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>Databases</td>
              <td>3/17/21</td>
              <td>89</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>APIs</td>
              <td>3/24/21</td>
              <td>94</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>Deployment</td>
              <td>3/31/21</td>
              <td>86</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td>Final Project</td>
              <td>4/7/21</td>
              <td>93</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>89.5</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet: <br />
        <img
          id="wd-starship"
          width="400px"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        <br />
        Loading a local image:
        <br />
        <img id="wd-teslabot" src="/images/teslabot.jpg" height="200px" />
      </div>
      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input
            type="password"
            value="123@#$asd"
            id="wd-text-fields-password"
          />
          <br />
          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input type="text" title="John" id="wd-text-fields-first-name" />{" "}
          <br />
          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input
            type="text"
            placeholder="Doe"
            value="Wonderland"
            title="The last name"
            id="wd-text-fields-last-name"
          />
          {/* copy rest of form elements here  */}
        </form>
      </div>
      <h5>Text boxes</h5>
      <label>Biography:</label>
      <br />
      <textarea id="wd-textarea" cols={30} rows={10}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </textarea>
      <h5 id="wd-buttons">Buttons</h5>
      <button
        type="button"
        onClick={() => alert("You are worthy. I love you!")}
        id="wd-all-good"
      >
        Hello World!
      </button>
      <h5 id="wd-radio-buttons">
        Checkboxes (because radio buttons are too exclusive)
      </h5>
      <label>Select your mood today:</label>
      <br />
      <input type="checkbox" id="wd-checkbox-hungry" />
      <label htmlFor="wd-checkbox-hungry">
        Hungry enough to eat a whole pizza
      </label>
      <br />
      <input type="checkbox" id="wd-checkbox-tired" />
      <label htmlFor="wd-checkbox-tired">
        Tired enough to sleep through an earthquake
      </label>
      <br />
      <label>Favorite movie genre:</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-comedy" />
      <label htmlFor="wd-radio-comedy">Comedy</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-drama" />
      <label htmlFor="wd-radio-drama">Drama</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-scifi" />
      <label htmlFor="wd-radio-scifi">Science Fiction</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
      <label htmlFor="wd-radio-fantasy">Fantasy</label>
      <h5 id="wd-checkboxes">Checkboxes</h5>
      <label>Favorite movie genre:</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
      <label htmlFor="wd-chkbox-comedy">Comedy</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
      <label htmlFor="wd-chkbox-drama">Drama</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
      <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
      <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
      <br />
      <select multiple>
        <option value="VAL1" selected>
          Value 1
        </option>
        <option value="VAL2">Value 2</option>
        <option value="VAL3" selected>
          Value 3
        </option>
      </select>
      <br />
      <h5>Select one</h5>
      <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label>
      <br />
      <select id="wd-select-one-genre">
        <option value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">
          Science Fiction
        </option>
        <option value="FANTASY">Fantasy</option>
      </select>
      <br />
      <h5>Select many</h5>
      <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label>
      <br />
      <select multiple id="wd-select-many-genre">
        <option value="COMEDY" selected>
          {" "}
          Comedy{" "}
        </option>
        <option value="DRAMA"> Drama </option>
        <option value="SCIFI" selected>
          {" "}
          Science Fiction{" "}
        </option>
        <option value="FANTASY"> Fantasy </option>
      </select>
      <h4>Other HTML field types</h4>
      <label htmlFor="wd-text-fields-email"> Email: </label>
      <input
        type="email"
        placeholder="jdoe@somewhere.com"
        id="wd-text-fields-email"
      />
      <br />
      <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
      <input
        type="number"
        value="100000"
        placeholder="1000"
        id="wd-text-fields-salary-start"
      />
      <br />
      <label htmlFor="wd-text-fields-rating"> Rating: </label>
      <input
        type="range"
        value="4"
        max="5"
        placeholder="Doe"
        id="wd-text-fields-rating"
      />
      <br />
      <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
      <input type="date" value="2000-01-21" id="wd-text-fields-dob" />
      <br />
      <h4>Anchor tag</h4>
      Please
      <a href="https://www.lipsum.com" id="wd-lipsum">
      {" "}click here{" "}
      </a>
      to get dummy text
      <br />
      <h4>Anchor tag</h4>
      Please
      <a
        href="https://github.com/vitoriomexas311/kambaz-react-web-app"
        id="wd-github"
      >
        {" "}click here {" "}
      </a>
      to get my github repository!
      <br />
    </div>
  );
}
