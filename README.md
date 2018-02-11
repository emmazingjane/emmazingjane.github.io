In my portfolio project I used HTML, alot of CSS, and some javascript. 

When I first started I just drew out all of my ideas for what I wanted it to look like, pretty basic just a solid layout. I wanted to use my own pictures, give some info about my skills and also about my life. I wanted to showcase my projects as well as have testimonies from my classmates. Once I got all of my basic in I started to play around and add things I wanted and to perfect some things I had struggled with.

One unsolved problem I had which I need to learn more about is how to have the form submit to my email so I can get in touch with people should they try. One of my biggest challenges was getting my tid-bits to flip and have different front-side and back-side.

My biggest wins were using JavaScript to mke it responsive and getting my website online which I am still learning about

The flipper was a fun challenege

 <section class="flexflip">
		
		<div class="flip-container" ontouchstart="this.classList.toggle('hover');">
			<div class="flipper">
				<div class="front1">
					
				</div>
				<div class="back1">
					<p>My dwarf cat thats been by my side for 5 years.</p>
				</div>
			</div>
		</div>
		<div class="flip-container" ontouchstart="this.classList.toggle('hover');">
			<div class="flipper">
				<div class="front2">
					

				</div>
				<div class="back2">
					<p>I love to cook, nutritious food is my specialty!</p>
				</div>
			</div>
		</div>
		<div class="flip-container" ontouchstart="this.classList.toggle('hover');">
			<div class="flipper">
				<div class="front3">
					
				</div>
				<div class="back3">
					<p>I rescued Dakota when he was a puppy, now he's my forever friend</p>
				</div>
			</div>
		</div>
		<div class="flip-container" ontouchstart="this.classList.toggle('hover');">
			<div class="flipper">
				<div class="front4">
					
				</div>
				<div class="back4">
					<p>I love to hike and go on adventures in nature.</p>				
				</div>
			</div>
		</div>
		<div class="flip-container" ontouchstart="this.classList.toggle('hover');">
			<div class="flipper">
				<div class="front5">
					
				</div>
				<div class="back5">
					<p>In my spare time I paint</p>
				</div>
			</div>
		</div>
	</section> 

	.flexflip {
	display: flex;
	flex-direction: row;
}

.flexflip p {
	text-align: center;
	font-size: 1em;
	margin-top: 5em;
}

.flip-container {
	perspective: 1000px;
	
}
/* flip the pane when hovered */
.flip-container:hover .flipper, .flip-container.hover .flipper {
		transform: rotateY(180deg);
}

.flip-container, .front1, .back1, .front2, .back2, .front3, .back3, .front4, .back4, .front5, .back5 {
	width: 290px;
	height: 300px;
}

/* flip speed goes here */
.flipper {
	transition: 0.6s;
	transform-style: preserve-3d;

	position: relative;
}

/* hide back of pane during swap */
.front1, .back1, .front2, .back2, .front3, .back3, .front4, .back4, .front5, .back5 {
	backface-visibility: hidden;

	position: absolute;
	top: 0;
	left: 0;
}

/* front pane, placed above back */
.front1, .front2, .front3, .front4, .front5 {
	z-index: 2;
	transform: rotateY(0deg);
}

/* back, initially hidden pane */
.back1, .back2, .back3, .back4, .back5 {
	transform: rotateY(180deg);
	background-color: #997a8d;
}

.front1 {
	background-image: url("img/bella.png");
	background-size: cover;
}
.front2 {
	background-image: url("img/cooking3.png");
	background-size: cover;
}

.front3 {
	background-image: url("img/dakota.png");
	background-size: cover;
}

.front4 {
	background-image: url("img/hiking.png");
	background-size: cover;
}

.front5 {
	background-image: url("img/painting.png");
	background-size: cover;
}



