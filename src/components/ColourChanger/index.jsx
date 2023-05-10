import Select from 'react-select'
import { useTheme } from '../../contexts';

export default function ColourChanger (props) {

  const {themes} = useTheme()
    const handleColorChange = (selectedOption) => {
        // const color = selectedOption.value;
        // console.log('selectedOption', selectedOption)
        // // props.onColorChange(color);
      props.onColorChange(selectedOption.value);
      console.log(selectedOption)
        // localStorage.setItem("backgroundColor", theme.primColor);
      };

      const colorOptions = []

       for (let op in themes) {
          colorOptions.push({'label':op, 'value': op})
        }
        console.log(colorOptions)
      // const colorOptions = [
      //   { value: "#D17B88", label: "Rose" },
      //   { value: "#E2E4F6", label: "Lavender" },
      //   { value: "#BEC7A8", label: "Sage" },
      //   { value: "#B1CBD2", label: "Light Grey" },
      //   { value: "#F4C095", label: "Peach" },
      //   {value: '#011228', label: 'Navy'}
      // ];
      
     
  return (
    <div className='mb-3'>
        <label htmlFor='colour-dropdown' className='form-label'>Choose background colour</label>
        <Select className="colour-dropdown form-control" options={colorOptions} onChange={handleColorChange}/>
    </div>
  )
}
