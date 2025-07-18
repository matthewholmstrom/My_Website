import  React  from 'react';



function TopicsPage() {
    return (
       
       <>     
        
        <h2>Web Dev Concepts</h2>
        <nav class="local">
            <a href="#optimizingImages">Optimizing Images</a>
            <a href="#favicons">Favicons</a>
            <a href="#webServers">Web Servers</a>
            <a href="#frontendDesign">Front End Design</a>
            
          



        </nav>
    
        <article id="webServers">
            <h3>Web Servers</h3>
            

           
            <p> A <strong>designated homepage</strong> is the file that the web application on the web server returns to
                whenever a GET request is received for the "/". In general, most applications are set up to
                to use the file <strong>"index.html"</strong>, which is in the root directory, as their designated homepage.
                Also, most web severs are set up to map to the file or designated homepage, "index.html", whenever
                the server receives a request for "/". The <strong>Apache web server</strong>, for example, uses "index.html" as its
                designated homepage. However, sometimes there are cases when "index.html" is not the designated homepage.
                For example, Microsoft's.Net platform, allows the use of "default.html" as a designated homepage.
                Also, if other languages in applications are used (such as <strong>JavaScript</strong> or <strong>PHP</strong>) then index.js or index.php can
                also be used as the designated homepage.
            </p>
        
          
            
                <p> There are many things that can be seen in the browser's <strong>Web Dev/Inspector Network tab</strong> output screen. Under the 
                <strong>name section</strong> there is the "index.html", main.css, and main.js files. In the <strong>"header" section</strong>  is the request URL,
                request method, status code, remote address, and referrer policy. In the <strong>request header's section</strong> there are details
                about the acceptance of the request. Some of these details include the language, cache controls, accept encoding,
                user-agent, pragma, and host. In the response header's section, there are details about the response to the request.
                Some of these details include the content type, dates, content length, server, and encoding. Under the <strong>response section</strong>
                there is the raw response data which contains HTML. There are differences in the file's details when viewed from the 
                <strong>web server</strong> versus the <strong>local computer</strong>. The web server displays the favicon.ico file and the local computer doesn't have this.
                The request URLs are different on the web server and local computer. The web server shows the remote address, and the local
                computer doesn't show this. There are many more details in the response headers section on the web server, than are in the local
                computer's response headers section. The local computer's response headers section only contains the content-type and the last time the application
                was modified. The web browser's response headers section contains the connection, server, content type, content length, etc.
                There are many more details in the request headers section on the web server, than are in the local
                computer's request headers section. The local computer's request headers contains a message saying "provisional headers are shown".
                The local computer also doesn't display the accept, encoding, language, cache control, connection, and cookie.
            </p>
           
        
            <p> Inside the network tab of the web server, the favicon.ico file has the <strong> status code </strong>200 because the application's request
                for the <strong>favico.ico file</strong> was successfully processed by the web server. We can also that the status code of 200 must have been returned,
                since the OSU COE symbol appears in the web server's tab header. Also, the <strong>main.css</strong> and <strong>main.js files</strong> have the status code 404 because
                the server could not fulfill the client's request since the request was not valid. The status code 404 indicates
                that main.css and main.js files were found on the web server. A status code in the four hundreds indicates that the error
                occurred because of an error made by the client.</p>
        
           
            <p>My Oregon State ENGR web server's <strong>URL</strong> contains several distinct parts. The <strong>scheme</strong>
                is HTTPS. The first <strong>subdomain</strong> is web. The second subdomain is engr. The <strong>host domain</strong> is "Oregon state"
                and the extension is com. The <strong>path to the resource(s)</strong> is "/~holmstrm/a1-holmstrm/". 
                My web server's <strong>resources</strong>, are "/~holmstrm/a1-holmstrm/".
             </p>
            
            
    
    
    
        </article>
        <article id="frontendDesign">
            <h3>Frontend Design</h3>
            <p><strong>Frontend design</strong> is a concept that is centered around providing the best experience for the user of the web application,
                desktop app, or any user-operated device. Frontend design involves the visual design of the web page, the interactive
                experience of the user, and the graphical user interface. The visual display for the user must allow for easy navigation, 
                as well as use consistent typography, color, font, photography, and illustration schemes. Some of the technologies used in
                frontend design include URLs, HTML, CSS, JavaScript, and REACT. When implementing frontend design in their apps, developers
                must pay special attention to the concepts of usability and inclusivity.

            </p>
            
            <p> Below are <strong>"five E's of usability"</strong> that developers must pay attention to in order to provide a good user experience 
                when using the app.
            </p>
            
            <dl>
                <dt>Effective</dt>
                <dd>The created app must be effective. An effective app helps users meet their goals. Effective in this
                context, also means that the user will also finish with accurate results.
                </dd>
                <dt>Efficient</dt>
                <dd>An app should be efficient and allow users to complete a task without any redundant or unnecessary steps. An
                    efficient app also allows users to perform tasks with the least number of steps. Also, an efficient app 
                    allow users to get their results quickly.
                </dd>
                <dt>Easy to Navigate</dt>
                <dd>A website that is usable should be easy to navigate. The user should be able to easily achieve their desired result,
                    through navigation and searching. The app should be especially user-friendly for people brand new to the app or site.
                    The user should also be able to remember exactly how to get their results through navigation or searching, if they use the
                    app or site again in the future.
                </dd>
                <dt>Error-free</dt>
                <dd>A website or app that is usable should be error-free. This means that the site or app should not have any hindrances
                    that could obstruct the user from getting their results. An error-free app avoids accessibility and availability issues.
                    Developers should learn how user's experience common errors, to help them write error-free apps.
                </dd>
                <dt>Enjoyable or Engaging</dt>
                <dd>
                    A website or app that is usable should be enjoyable or engaging. The user of the app or site should have a good experience 
                    when using the product. The content and design of the app should fit the unique needs of the specific audience. The user of the site
                    or app should want to use the product again because of the previous four "E's of usability" listed above.
                </dd>
            </dl>

            <p>
                The <strong>header element's</strong> purpose is to display the company's logo, the author's name, the publisher of the app/site, or a marketing
                slogan. It is displayed at the very top of the page or app. To help user's know that they are still using the same app/site, developer's
                often use the same header for each page of the app/site. The header element can also be used to introduce content to the user of the site/ app.
                There are trends in the way that the header is displayed, and the current trend is to use very little room for the header, in order to make the content
                show above the scroll area in the <strong>viewport</strong>.

            </p>

            <p> The <strong>navigation element's</strong> purpose is to help the user navigate to different pages of the site/app, or to different sections
                on the same site/app. The user of the site/app navigates to these different areas through the use of navigational links inside 
                the navigation element. Sets of navigation often include table of contents, menus, search, legal links, stories, and tools. This
                element can also be used several times in the app/site. Developers typically only use this element for major blocks of navigational links.
            </p>

            <p>
                The <strong>main element's </strong>purpose is to hold the main content of the body of a document. It often holds things such as galleries, tutorials,
                stories etc. The content area of the main element contains content that is directly related to the main topic or functionality of the web page.
                The site/app can only have more than one main element if the hidden attribute is designated. Content that is repeated across many pages or 
                sections of the document, should only be used in the main element, if this content is related to the main functionality of the document.
            </p>

            <p> The <strong>navigation element's</strong> purpose is to help the user navigate to different pages of the site/app, or to different sections
                on the same site/app. The user of the site/app navigates to these different areas through the use of navigational links inside 
                the navigation element. Sets of navigation often include table of contents, menus, search, legal links, stories, and tools. This
                element can also be used several times in the app/site. Developers typically only use this element for major blocks of navigational links.
            </p>

            <p> The <strong>section element's</strong> purpose is to designate a grouping of content that falls under the same theme. The content of the section element is related
                but does not completely stand out on its own. Sections almost always have a heading that describes what is section is about. Usually
                this heading element is the first child of the section element, and is usually a "h1" headline element. If the content in the section is 
                not completely related, then an article element should hold the content, instead of a section element. If the section element holds content related to the main content
                in the document, then the main element should be used instead.
            </p>

            <p> The <strong>article element</strong> is used to hold the content of a specific topic. Often articles are used in sections, and have a "h2" headline element their first child.
                Developers typically mark articles with <strong>ID selectors</strong> if there are many articles within the same section. Developers do this to style articles uniquely from
                one another. The ID selectors can also be used as a place for anchors to land to, if the developer wants to allow the user to jump internally
                within the same document.
            </p>

            <p> The <strong>aside element's</strong> purpose is to hold content related to an article. They are often used as sidebars for navigation or call-out boxes. The article
                element is placed to the left or right of its related article, and typically has a different style than that article. The content of an 
                article element, is only indirectly related to the main content of the web page. 
            </p>

            <p> 
                The <strong>figure element's</strong> purpose is to hold content related to an article. The figure element is usually used for displaying media 
                such as a movie or an image, and includes an optional <strong>"figcaption" element</strong> for that figure. The figure element is also commonly
                used to display a code snippet, diagram, or illustration. The figure element wraps around the <strong>"img"</strong> and "figcaption" elements. Note that,
                the first "figcaption" element in the figure tag displays the figure's caption.
            </p>

            <p> 
                The <strong>blockquote element's</strong> purpose is to display a quote that is too long for displaying in a paragraph. The blockquote often visually
                displays its contents differently from paragraphs. This is done to distinguish between the two. The blockquote element contains a "q" 
                element to display the quote, and a <strong>"cite" element</strong> used to cite the source of the text. When the "cite" attribute is used outside of 
                tags, it used to display a URL of the corresponding quote. Text representations of the quote are displayed using tags containing
                the "cite" element.
            </p>

            <p> The <strong>footer element's</strong> purpose is to hold links to important web pages, legal information, or contact information. The footer element
                is placed below the closing "main" element tag. The footer element, at the very least, should display the app/site's copyright statement. 
                The copyright statement includes the copyright symbol (displayed using ASCII entities), the year of publication, and the owner's name.
                An optional <strong>"address" element</strong> can be used in the footer element to display information about the author of the app/site. 
  
            </p>

            <p> 
                The <strong>div element's</strong> is used as a placeholder for dynamic content. The element does not have style or dimensions. The div element can
                also be used to store content when no existing element makes sense. Note that the div element should only be used if no other semantic
                element is appropriate. The element does not have an effect on content or layout, unless it is styled in some way using
                "CSS"
            </p>

            <ol>
                <li>
                   The anchor element can be used to link to external content outside the current website. The anchor element does
                   this by linking to the external website's URL. The anchor element creates hyperlinks from one element to another element. The content, 
                   between the opening and closing anchor element tags, describes the link when the user clicks on it. The anchor element links to external
                   content by first using the href attribute followed by an equal sign containing the URL of external website in quotes, which is then followed
                   by a greater than sign, which is then followed by text that the describes the link. The user can then jump to an external website by clicking
                   on this text.
                   
                </li>
                    
                <li>
                    The anchor element can be used to link to internal content within the same web page, by using ID's. The anchor element is placed
                    in between opening and closing "nav" tags. The "nav" tags allow for navigation to articles on the same page, or to other pages
                    on the same website. For navigation between articles on the same page, class="local" is typed after the word "nav" in the opening "nav" tag.
                    First, an article element containing the following content is created. The content of the article element is first, "id=" followed
                    by the title of the topic, which is then followed by a greater than sign, which is then followed by text that the describes the content of the topic.
                    After the article element is an anchor element, which contains a href attribute followed by an equal sign containing the URL of external
                    website in quotes, which is then followed by a greater than sign which is then followed by the title of the topic in the corresponding article. The user
                    can then jump to articles on the same page by clicking on this text.

                </li>

                <li>
                    The anchor element can be used to link from page to page within the same website. The anchor element is placed
                    in between opening and closing "nav" tags. The "nav" tags allow for navigation to articles on the same page, 
                    or to other pages on the same website. For navigation between pages on the same website, class="local" is left out after the word
                    "nav" in the opening "nav" tag. To link from page to page within the same website, the anchor element first uses the 
                    href attribute followed by an equal sign containing the relative URL of a file in quotes, which is then followed
                    by a greater than sign, which is then followed by text that the describes the link. The user can then jump to an external website
                    by clicking on this text. The relative URL points to a location relative to the file in which we use that URL.

                </li>
                
            </ol>


        </article>

        </>
    );
}
export default TopicsPage;
