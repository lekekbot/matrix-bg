const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
})

window.addEventListener('scroll', e => {
	let arrow = document.getElementById('center-arrow')
	arrow.style.opacity = 1 - (window.scrollY / 200)
})

/**
 * const checkpoint = 300;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".front").style.opacity = opacity;
});
 */


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const nums = '01';

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

	for(i = 0; i < rainDrops.length; i++)
	{
		const text = nums.charAt(Math.floor(Math.random() * nums.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 30);


