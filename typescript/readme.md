###  typescript


- 基础类型:
  
  枚举(enum):
  
  `enum类型是javascript对标准数据类型的一个补充`
  
``` 
  enum Color {Red ,Green ,Blue}
  let c: Color = Color.Green
  
```
  Any:
  `有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：`
  
  ``` 
     let notSure:any = 4;
     notSure = "maybe a string instead";
     notSure = false;
     let list:any[] = [1,true,"free"];
     list[1] = 100;    
  ```
  

- 接口:

`TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。`

接口是如何工作的

``` 
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

```
