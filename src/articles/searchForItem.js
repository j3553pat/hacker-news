import React, {useState} from 'react';


const SearchForItem = (props) => {
    const [dataInput, typeDataInput] = useState('')
    const [category, setCategory] = useState('article')



const searchHandle = () => {
    props.onSearchEvent(dataInput, category)
}

const typeDataInputHandle = (event) => {
    typeDataInput(event.target.value)
}

const categoryType = (event) => {
    setCategory(event.target.value)
}

return (
    <div className='bodyContainer'>
        <h1>HACKERNEWS</h1>
        <div className='searchTermContainer'>
            <input className='dataInput'
                type="search"
                value={dataInput}
                placeholder="Click Here To Search"
                onChange={typeDataInputHandle} />
            <button className='search'
                onClick={searchHandle}>search
            </button>
        </div>
        <div>
            <div className='searchby'>Search:
            <div className="radio">
                <span>Article</span>
                <input type='radio'
                id="story"
                name='search-category'
                value='story'
                checked= {category === 'story'}
                onChange={categoryType} />
            </div>
            </div>
        </div>
    </div>
    
)

}

export default SearchForItem