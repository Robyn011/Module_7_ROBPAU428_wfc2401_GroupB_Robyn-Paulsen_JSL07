document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Display the modal
    modal.style.display = 'block';

    // Get input values
    const studentNameInput = document.getElementById('studentName');
    const personalMessageInput = document.getElementById('personalMessage');
    const courseNameInput = document.getElementById('courseName');

    const studentName = studentNameInput.value;
    const personalMessage = personalMessageInput.value;
    const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

    if (studentName.trim() === '' || personalMessage.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    // Generate certificate content dynamically
    certificateContent.innerHTML = `
     
        <h1>
          Certificate of Achievement
        <h2>This is to certify that
        </h2>
        <h3>${studentName}
        </h3>
        <h2>has almost completed the
        </h2>
        <h3>${courseName}
        </h3>
        <h2>with legendary perseverance and world-class badassery for never giving up🏆
        </h2>
        <img src="logo.png" id="imageContainer">
        <h2>I am the greatest✨✨
        </h2>
     
    `;

    // Clear the form inputs
    studentNameInput.value = '';
    personalMessageInput.value = '';
    if (courseNameInput) courseNameInput.value = '';
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });
});