import React from 'react'
import "../FirstSectionText/FirstSectionText.css"
import Search from '../Search/Search'

export default function FirstSectionText() {
  return (
    <div>
        <div className='text-first-section'><h1>
World Top 
<span id='themze'> Themes,<br/>
 Plugins & Templates</span>
</h1>
<p id='p-first-section'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut aenean in dolor. Praesent mi velit in id hac platea leo vulputate.
</p>
<Search/>
</div>

    </div>
  )
}
