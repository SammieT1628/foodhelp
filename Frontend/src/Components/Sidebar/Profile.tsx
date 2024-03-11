import ListGroup from "../BasicComponents/ListGroup"

function Profile() {
    const ProfileData = {
        Name: 'Samantha Thompson',
        Username: 'tsammie16',
        eMail: 'tsammie16@gmail.com',
        'Phone Number': '(636)357-9633'
      }

      const handleSelectItem = (name: string) => {
        console.log(name)
      }

    return (
        <>
        <ListGroup data={ProfileData} heading={'User Info'} onSelectItem={handleSelectItem}/>
        </>
    )
}

export default Profile