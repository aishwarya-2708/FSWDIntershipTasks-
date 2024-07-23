
			// JavaScript for toggling the menu bar
			document.getElementById('menu-bar').addEventListener('click', function() {
				document.querySelector('.menubar').classList.toggle('active');
			});
	
			// Smooth scrolling for internal links
			document.querySelectorAll('a[href^="#"]').forEach(anchor => {
				anchor.addEventListener('click', function(e) {
					e.preventDefault();
	
					document.querySelector(this.getAttribute('href')).scrollIntoView({
						behavior: 'smooth'
					});
				});
			});
	
			// Form validation
			const form = document.getElementById('orderForm');
			form.addEventListener('submit', function(event) {
				event.preventDefault();
				if (validateForm()) {
					alert('Your order has been placed! Thank you for visiting our cafe site.');
					form.reset();
				}
			});
	
			function validateForm() {
				const name = document.getElementById('name').value.trim();
				const mobile = document.querySelector('input[type="text"]').value.trim();
				const email = document.querySelector('input[type="email"]').value.trim();
				const foodItems = document.querySelector('.ordertext').value.trim();
				const address = document.querySelector('.ordrtxt').value.trim();
	
				if (name == '' || mobile == '' || email == '' || foodItems == '' || address == '') {
					alert('Please fill in all fields.');
					return false;
				}
	
				// Additional validation can be added for email format, mobile number format, etc.
				return true;
			}
	