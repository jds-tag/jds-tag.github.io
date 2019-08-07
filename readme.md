# Third and Grove Frontend Developer Assessment – James David Saul

Hello! Welcome to my Frontend Developer Assessment. Here are some notes about this little web application you asked me to make.

# Installation

Since I care about your bandwidth, I excluded the node_modules directory everywhere. If you want to try compiling, you'll need to run `npm install` first.

# Compiling SASS

SASS can be compiled by running either `gulp styles` or `gulp watch`. Generally, I would be outputting individual CSS files that get aggregated by Drupal, each with their own source map. For this particular assessment, I've set up a gulpfile.js that minifies all SASS files down into a single styles.min.css file. No source maps, just practical, streamlined code.

# SASS Structure

Here is an overview of the SASS structure, that follows a modified "inverted triangle" model:

* 0-vendor: Vendor files, in this case the breakpoints node module
* 1-settings-tools: Colors, fonts, globals
* 2-generic: resets and general layout setup
* 3-molecules: the components that make up the larger application
* 4-helpers: Color/alignemnt classes. The most specific (and most convenient!)

# Helper classes and BEM

I followed the instructions on using BEM, specifically for the list of people, but I did create some global helper classes and have a tendency to do that when I'm writing SASS. You can put helper classes on actual markup and cut down on the amount of SASS you need to write, and these helper classes are global in scope. Therefore they might not exactly match up with BEM methodology.

Some BEM purists may agrue that my markup is not meeting guidelines (like `person__name-location`) but the naming makes sense to me and I hope it makes sense to you. If it doesn't, that's something to discuss.

# Slight liberty with colors and font sizes

Some of these colors were a little light and the fonts were a little small, so I made a few minor adjustments along the way. This would go for design review anyway, so I could work out any specifics with creative then.

I know the "Expandable Content" heading was supposed to be #d8d8d8 gray. I did NOT like it. I made it #fff to be more readable.

# Things that I would do if I had more time

* Add `aria-label` and other accessibility info to the accordion.
* Maybe toggle the open accordion closed so that there's only one open at a time, would depend on designer feedback.
* Maybe do a fun loading animation to mitigate against flash of unseen content.
* Leverage FontAwesome Pro/better icon weights.


# Other notes

The favicon is an incredibly small (2kb) photo of me and my dog at the top of Southwest Hunter Mountain in the Catskills.

I left the ddev folder in here on purpose! I don't know how you locally dev, but this worked for me today.