# Website Performance Optimization Project

The goal of this project was to optimize the provided website which can be found at [this GitHub repository](https://github.com/udacity/frontend-nanodegree-mobile-portfolio) to run at 60 fps.


## Project Organization

- I restructured the files into two separate folders (src and dist) in order to better organize and more easily minify and compress files with gulp.js
- Development code is in the src directory
- Production code is in the dist directory


## Getting Started

  I utilized node.js and gulp.js in order to minify all _.css_ and _.html_ files. I also used gulp.js to inline _style.css_ into _index.html_, as well as compress images and uglify _.js_ files.

- Download node.js and Open node.js command prompt
- Install gulp : ```
                 npm install gulp-cli -g
                 ```
- Navigate to project folder and initialize project : ```
                                                      npm init
                                                      ```
- Install gulp into your project folder and save it as a development dependency : ```
                         npm install gulp --save-dev
                         ```
- Create a new file in your project folder and name it _gulpfile.js_
- Within that file place your code instructing gulp which tasks you need performed. Be sure to make them a development dependency the same way we did with gulp above.
* [You can read more on how to do that here](https://www.npmjs.com/package/gulp-task)                    


- I also compressed images further using [JPEG Compressor & Resizer](https://www.giftofspeed.com/jpg-compressor/) and [PNG Compressor](https://www.giftofspeed.com/png-compressor/)


### Part 1: Optimize PageSpeed Insights score for index.html

- Relocated <script> and <style> tags from document <head> to just above the closing of the </body> and added async attributes to <script> tags.
- Removed Google Fonts <link> because it took far too much time to load and I think the page doesn't look too much different without it.
- Added a print media query to the _print.css_ <link> so that it will only be loaded if the page is printed.

### Part 2: Optimize Frames per Second in pizza.html
#### In pizza.html

- Changed <div>s with pizza.png from a percentage width to a column size.

#### In main.js

- Changed querySelectorAll and querySelector to getElementById and getElementsByClassName whenever possible.
- Accordingly changed the style.width of pizzaImageContainer and pizzaDescriptionContainer from a percentage width to a column size.
- Created a defaultPizza variable within changePizzaSizes function so that the new width of the pizza's can be determined from one pizza instead of all of them.
- Removed pizzaDiv variable from the for loop so that it only happens once.
- Created scroll variable in updatePositions function and set it equal to document.body.scrollTop that was originally inside the for loop.
- Saved array length of variable items into separate itemsLength variable so the array's length won't be accessed each iteration of the for loop in updatePositions function.
- Created two different loops, one for the phases and the other for positions in the updatePositions function.
- Calculated number of pizzas using inner.height properties instead of the number 200.
- Moved DOM call, document.getElementById('movingPizzas1'); outside of the for loop and saved to local variable movingPizzas.


### Sources

* [Front-End Web Developer Nanodegree Program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001)
* [Information on getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName)
* [Tutorial on Git and GitHub](https://www.youtube.com/watch?v=SWYqp7iY_Tc)
* [Optimizing the CRP](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Gulp.js Tutorial](https://www.youtube.com/watch?v=tlxm4eLbTio)
* [Tips - Increasing Framerate](https://classroom.udacity.com/nanodegrees/nd001/parts/8a0daeaa-7ee0-4d2a-ac02-517d00eb8b09/modules/42065005-264a-4247-b019-a769c4e424a6/lessons/5988439100/concepts/68776485930923)
* [Image Optimization](https://www.giftofspeed.com/optimize-images/)
* [Window.innerHeight](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight)
