import Category from "../category/category";
import "./categories.scss"
const Categories =  ()=> {
	const categories_array = [
		{
		  id: 1,
		  title: 'hats',
		  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
		},
		{
		  id: 2,
		  title: 'jackets',
		  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
		},
		{
		  id: 3,
		  title: 'sneakers',
		  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
		},
		{
		  id: 4,
		  title: 'womens',
		  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
		},
		{
		  id: 5,
		  title: 'mens',
		  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
		},
	  ];
	return(<div className="categories-container">
		{categories_array.map(category=><Category key={category.id} category={category}/>)}
	</div>);
}
export default Categories;