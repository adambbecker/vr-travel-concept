# VR Travel Theme Concept

> An experimental playground used primarily to explore what a website could look like in VR. That exploration started with some traditional 2D mockups, but quickly evolved to become this project in the form of a travel website called "The Surveyor".

*This is just a rough experiment used as an exploration, it's not meant to be anything more.*

---

### Not actual VR

There are a ton of really interesting developments happening in the VR space right now and some are even [focused on the web](http://www.vrfavs.com/#WebVR), which is awesome! This particular project project however doesn't actually render in VR because of how and why it was developed.

It's creation came out of a curiosity for learning about the web VR space, but because of the depth of that space, "The Surveyor" was created in an attempt to focus on a particular target in the form of a design project. With that focus in place, it's becoming much easier to explore the techniques associated with creating web VR content with a target in place.

Currently, when the "simulate VR" toggle is active, the scene renders full screen and utilizes mouse movement to simulate the head tracking of a VR headset.

---

### Additional goals

While the primary goal for the project is to explore what web VR content might look like, it has evolved a bit to include the following additional goals:

##### Render normally
While the project can be viewed entirely in the "Simulate VR" mode, it was important to also be able to render the content normally as if it were just any other site.

##### Scrolling independence
Viewing content in VR doesn't currently have a design paradigm for overflowing content, so the project's scene is rendered not to scroll. When in the "Simulate VR" mode, it utilizes a larger canvas beyond the browser bounds to place content which allows for the scene to pan with mouse movement (simulating headset tracking).

##### Third dimension
Early on in the exploration it became apparent that the third dimension is a fantastic presentation tool for VR content because the viewport is almost always shifting. It became a goal, to play around with it, in the browser as an additional means of displaying content hierarchy.

##### Router CSS Transitions
When navigating around the site, powered by [React Router](https://github.com/reactjs/react-router), the content should transition utilizing just CSS and class name manipulation.

##### Cursor usage - *not complete*
When utilizing a VR headset, actions like mouse clicks aren't available. Interacting with content without this event will warrant some future exploration utilizing focus and hover timings.

---

### Tools used

A list of all the tools can be found in the [`package.json`](package.json), but here are some of the bigger UI focused tools:

* [**React**](https://facebook.github.io/react/) - view layer.
* [**React Photoswipe**](https://github.com/vn38minhtran/react-photoswipe) - React implementation of the popular [Photoswipe](http://photoswipe.com/) photo gallery; [forked](https://github.com/adambbecker/react-photoswipe/tree/add/gallery-item-style) for a view additional requirements that came up during development.
* [**React Leaflet**](https://github.com/PaulLeCam/react-leaflet) - React implementation of the [Leaflet](http://leafletjs.com/), used in conjunction with a custom [Mapbox](https://www.mapbox.com/) tileset.

---

### Disclaimer

This is still very experimental and the project was created mainly as a local test bed for the goals mentioned above. The source code is certainly not intended for production use. As an experiment in the space, there definitely could be more than a few bugs floating around and keep in mind since VR headsets have a particular field of view, the project hasn’t been optimized to be exactly responsive for certain aspect ratios or smaller screens.

Basically:

> Please excuse the mess, still learning :)

---

**P.S.** Huge shoutout to the wonderful community at [Unsplash](https://unsplash.com/) for supplying the demo images.
