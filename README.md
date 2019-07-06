# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

1. First the browser goes to the Domain Name Servers (DNS) to look up the ip address of the website.

2. Then an HTTP request message is sent to the server from the browser asking for a copy of the website.

3. If the server approves the request, it sends the client (browser) a response message of "200 OK", which means that request was approved and starts sending the website's files to the browser as data packets.

4. The browser assembles the packets into a complete website by parsing and rendering the HTML code.

5. The browser sends requests for additional object such as CSS, Javascript, and images.

6. After the page is loaded, the browser sends further requests as needed.

## From start to finish, how does data reach you to be rendered in the browser?

1. The browser sends an HTTP request to the server.

2. The server software launches the server plugin needed to handle the request.

3. To construct an HTTP response, the server makes a database search based on the request.

4. The server plugin combines the data with HTTP headers and sends the HTTP response back to the browser.

5. The browser then parses the HTML in the response.


## What code is rendered in the browser?

The browser renders HTML, CSS, and Javascript code.

The browser converts the raw data of HTML into a Document Object Model (DOM) object. HTML provides the structure of the webpage.

The CSS code is similarly converted into CSS Object Model (CSSOM). The CSS is use to style the webpage.

Javascript is used to add functionality and dynamically update the webpage. Whenever the browser encounters a script tag, the DOM construction pauses. This is because Javascript can alter both the DOM and CSSOM.

## What is the server-side code’s main function?

The main function of server-side code is choosing which content to return to the browser. It allows the website to be tailored for the individual users.

## What is the client-side code’s main function?

The main function of the client-side code is about improving the appearance and behavior of a webpage.

## What is runtime?

Runtime is the Javascript engine that interprets and executes Javascript code. The runtime environment is the location where it is executed like a web browser or backend server.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

With client-side rendering, one instance of the assets is created and sent in a bundle to the browser.

## How many instances of the server-side code are available at any given time?

I am not entirely clear on the wording of the question. I was stuck what "instances" of the server-side code mean in this context. All the research I did suggest that outside of maybe cloud development there is only one copy of the code on the server. The code is sent to every user that comes to the site.

## How many instances of the databases connected to the server application are created?

I am also a little unclear about this question. In a simple application there is one database. Each time there is a request to the database, a connection is created. Once the application is loaded onto the client, if the application makes another request, there will be another connection to the database.
