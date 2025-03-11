# Frameworks & Intro to JS Project

## Overview

For this assignment, I was tasked with recreating a website using Bootstrap and JavaScript. Because I couldn't think of a good website,
I opted to create my own that emulates a web-store.

## Features

This website mostly uses Bootstrap components. Buttons and the like aside, I included a nav bar, a contact form, a table, cards, a carousel,
and a Toast notification.

#### The navbar

The navbar collapses into a hamburger menu for small screens, with links to Home, About, and Contact, styled with Bootstrap classes

#### The cards

Because this site is emulating a web-store, I used cards to display the products. Each one has a product image, product name, price, and "Add to cart"
button. They use Bootstrap's grid system to always stay neatly displayed.

#### The carousel

The carousel can be found under the product cards, and serves to display hypothetical testimonials. There are 3 slides in total
with Bootstrap's own carousel controls.

#### The table

The table is used to display when each "product collection" will be rolling out. It has striped and hoverable rows for better
readability.

#### The contact form

The contact form can be found on the contact.html page. Styled entirely with Bootstrap minus the button color, it includes fields for the
user's first name, email, phone number, and message. It also includes a set of radio inputs so the user can choose their preferred method
of contact.

#### The Toast notification

the Toast notification pops up once the user successfully submits the contact form.

## JavaScript

I wrote 4 functions in my JavaScript file for this assignment:

- displayErr(radioSet) is called if the user attempts to submit the form without choosing a radio input. It adds a red error message
under the radio set, if there isn't one there already, and removes it once the form successfully submits.