import { useEffect } from 'react'
import './why.scss'

const Why = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="why">
      <div className="title">
        Why <br />
        Nepal Helicopter Tours?
      </div>
      <div className="description">
        Nepal Helicopter Tours offers a variety of Helicopter tour programs suitable for all interested for different proposes. Helicopter tour are for those families who like who like to take a break and go for a unique weekend holidays, for the adventure lovers this is a easiest way to get in to the heart of Himalayas in a short time. Helicopter tours in Nepal is also suitable for elderly people who cannot trek to the Himalayas on their own.
        We provide special care of our clients during the tours and our pilots brief and provide you the information of the region you are flying to.
        <br />
        <br />
        Our helicopter tours and adventures are exciting and well organized. Years of research and planning experience have been put into every adventure presented in our program. We take you to the most remote, spectacular and unusual places on earth. We are constantly on the lookout for new and exciting tour programs for our guests who'd like to return. If you have a particular region you would like to visit please send us an email,we will be happy to assist you in devising variations into your trip.
        <br />
        <br />
        Every tours are led by an experienced group leader sensitive to the group's needs.Trip staffs are knowledgeable in all aspects of the region in which you will be traveling. Our tour guides are experts on all aspects of Nepal culture. All programs of this wesite are organized and operated by Mac Tours and Travel (P) Ltd. and Mac Trek and Expedition P. Ltd. In order to organize a complete tour / trek program it is necessary to have a travel agency and a trekking agency. As per the rules and regulations of Nepal Government Travel Agencies are allowed to organize tours, sell flight tickets and Trekking Companies are allowed to operate treks, climbings and expeditions.

      </div>
    </div>
  )
}

export default Why