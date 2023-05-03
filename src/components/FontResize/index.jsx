import Select from 'react-select'

export default function FontResize (props) {
  const handleFontResize = (selectedOption) => {
    const size = selectedOption.value;
    props.onFontResize(size)
    localStorage.setItem('fontSize', size)
  }

  const sizeOptions = [
    {value: 14, label: 14},
    {value: 16, label: 16},
    {value: 18, label: 18},
    {value: 20, label: 20},
    {value: 22, label: 22},
    {value: 24, label: 24}
  ]

  return (
    <div>
      <Select
        className='colour-dropdown'
        options={sizeOptions}
        onChange={handleFontResize}
        defaultValue={{ value: localStorage.getItem('fontSize'), label: localStorage.getItem('fontSize') }}
      />
    </div>
  )
}

