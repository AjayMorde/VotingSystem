const userpassword = document.getElementById('password')

async function checkResult(event) {
    event.preventDefault();
    const password = userpassword.value;
    try {


        const res = await axios.get('/admin/password');

        if (res.status == 200) {
            const correctPassword = res.data.data;
            console.log('==========================================>', correctPassword)

            if (password === correctPassword) {
                console.log('Password is correct');
                window.location.href = '/results';
            } else {
                console.log('Password is incorrect');

            }
        }
    } catch (error) {
        console.error('Error==================================================================================================:', error);
        alert(`${error}`)


    }
}