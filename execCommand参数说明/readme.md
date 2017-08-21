### document.execCommand()函数可用参数解析


 ***
  document.execCommand()方法可以用来执行很多我们无法实现的操作
  
  execCommand方法是执行一个对当前文档、当前选择或者给出范围的命令
  
  document.execCommand()方法处理Html数据时常用的语法格式如下，复制内容到剪贴板代码
  
  document.execCommand(sCommand[,交互方式, 动态参数]) 
  其中：
  sCommand为指令参数（如下例中的"2D-Position"），
  交互方式参数如果是true的话将显示对话框，如果为false的话，则不显示对话框（下例中的"false"即表示不显示对话框），动态参数一般为一可用值或属性值（如下例中的"true"）。 
  document.execCommand("2D-Position","false","true"); 
  
  
  调用execCommand()可以实现浏览器菜单的很多功能. 如保存文件,打开新文件,撤消、重做操作...等等. 有了这个方法,就可以很容易的实现网页中的文本编辑器. 
  
  
  
  ***
#### 使用的例子如下: 
    
  ---  
    1、〖全选〗命令的实现 
    [格式]:document.execCommand("selectAll") 
    [说明]将选种网页中的全部内容！ 
    [举例]在<body></body>之间加入： 
    <a href="#" onclick=document.execCommand("selectAll")>全选</a> 
    
    2、〖打开〗命令的实现 
    [格式]:document.execCommand("open") 
    [说明]这跟VB等编程设计中的webbrowser控件中的命令有些相似，大家也可依此琢磨琢磨。 
    [举例]在<body></body>之间加入： 
    <a href="#" onclick=document.execCommand("open")>打开</a> 
    
    3、〖另存为〗命令的实现 
    [格式]:document.execCommand("saveAs") 
    [说明]将该网页保存到本地盘的其它目录！ 
    [举例]在<body></body>之间加入： 
    <a href="#" onclick=document.execCommand("saveAs")>另存为</a> 
    
    4、〖打印〗命令的实现 
    [格式]:document.execCommand("print") 
    [说明]当然，你必须装了打印机！ 
    [举例]在<body></body>之间加入： 
    <a href="#" onclick=document.execCommand("print")>打印</a> 
    
    Js代码 下面列出的是指令参数及意义 
    
    //相当于单击文件中的打开按钮   
    document.execCommand("Open");   
      
    //将当前页面另存为   
    document.execCommand("SaveAs");   
      
    //剪贴选中的文字到剪贴板;   
    document.execCommand("Cut","false",null);   
      
    //删除选中的文字;   
    document.execCommand("Delete","false",null);    
      
    //改变选中区域的字体;   
    document.execCommand("FontName","false",sFontName);    
      
    //改变选中区域的字体大小;   
    document.execCommand("FontSize","false",sSize|iSize);    
      
    //设置前景颜色;   
    document.execCommand("ForeColor","false",sColor);   
      
    //使绝对定位的对象可直接拖动;    
    document.execCommand("2D-Position","false","true");   
      
    //使对象定位变成绝对定位;    
    document.execCommand("AbsolutePosition","false","true");   
      
    //设置背景颜色;   
    document.execCommand("BackColor","false",sColor);   
      
    //使选中区域的文字加粗;   
    document.execCommand("Bold","false",null);   
      
    //复制选中的文字到剪贴板;   
    document.execCommand("Copy","false",null);   
      
    //设置指定锚点为书签;   
    document.execCommand("CreateBookmark","false",sAnchorName);   
      
    //将选中文本变成超连接,若第二个参数为true,会出现参数设置对话框;   
    document.execCommand("CreateLink","false",sLinkURL);   
      
    //设置当前块的标签名;   
    document.execCommand("FormatBlock","false",sTagName);  
    
    //相当于单击文件中的打开按钮 
    document.execCommand("Open"); 
    
    //将当前页面另存为 
    document.execCommand("SaveAs"); 
    
    //剪贴选中的文字到剪贴板; 
    document.execCommand("Cut","false",null); 
    
    //删除选中的文字; 
    document.execCommand("Delete","false",null); 
    
    //改变选中区域的字体; 
    document.execCommand("FontName","false",sFontName); 
    
    //改变选中区域的字体大小; 
    document.execCommand("FontSize","false",sSize|iSize); 
    
    //设置前景颜色; 
    document.execCommand("ForeColor","false",sColor); 
    
    //使绝对定位的对象可直接拖动; 
    document.execCommand("2D-Position","false","true"); 
    
    //使对象定位变成绝对定位; 
    document.execCommand("AbsolutePosition","false","true"); 
    
    //设置背景颜色; 
    document.execCommand("BackColor","false",sColor); 
    
    //使选中区域的文字加粗; 
    document.execCommand("Bold","false",null); 
    
    //复制选中的文字到剪贴板; 
    document.execCommand("Copy","false",null); 
    
    //设置指定锚点为书签; 
    document.execCommand("CreateBookmark","false",sAnchorName); 
    
    //将选中文本变成超连接,若第二个参数为true,会出现参数设置对话框; 
    document.execCommand("CreateLink","false",sLinkURL); 
    
    //设置当前块的标签名; 
    document.execCommand("FormatBlock","false",sTagName); 
    
    
    另外:document.execCommand()还有很多的其它属性.以下是我搜集整理的.可能还漏了很多,希望大家多多补充! 
    
    2D-Position 允许通过拖曳移动绝对定位的对象。 
    
    AbsolutePosition 设定元素的 position 属性为“absolute”(绝对)。 
    
    BackColor 设置或获取当前选中区的背景颜色。 
    
    Bold 切换当前选中区的粗体显示与否。 
    
    Copy 将当前选中区复制到剪贴板。 
    
    CreateBookmark 创建一个书签锚或获取当前选中区或插入点的书签锚的名称。 
    
    CreateLink 在当前选中区上插入超级链接，或显示一个对话框允许用户指定要为当前选中区插入的超级链接的 URL。 
    
    Cut 将当前选中区复制到剪贴板并删除之。 
    
    Delete 删除当前选中区。 
    
    FontName 设置或获取当前选中区的字体。 
    
    FontSize 设置或获取当前选中区的字体大小。 
    
    ForeColor 设置或获取当前选中区的前景(文本)颜色。 
    
    FormatBlock 设置当前块格式化标签。 
    
    Indent 增加选中文本的缩进。 
    
    InsertButton 用按钮控件覆盖当前选中区。 
    
    InsertFieldset 用方框覆盖当前选中区。 
    
    InsertHorizontalRule 用水平线覆盖当前选中区。 
    
    InsertIFrame 用内嵌框架覆盖当前选中区。 
    
    InsertImage 用图像覆盖当前选中区。 
    
    InsertInputButton 用按钮控件覆盖当前选中区。 
    
    InsertInputCheckbox 用复选框控件覆盖当前选中区。 
    
    InsertInputFileUpload 用文件上载控件覆盖当前选中区。 
    
    InsertInputHidden 插入隐藏控件覆盖当前选中区。 
    
    InsertInputImage 用图像控件覆盖当前选中区。 
    
    InsertInputPassword 用密码控件覆盖当前选中区。 
    
    InsertInputRadio 用单选钮控件覆盖当前选中区。 
    
    InsertInputReset 用重置控件覆盖当前选中区。 
    
    InsertInputSubmit 用提交控件覆盖当前选中区。 
    
    InsertInputText 用文本控件覆盖当前选中区。 
    
    InsertMarquee 用空字幕覆盖当前选中区。 
    
    InsertOrderedList 切换当前选中区是编号列表还是常规格式化块。 
    
    InsertParagraph 用换行覆盖当前选中区。 
    
    InsertSelectDropdown 用下拉框控件覆盖当前选中区。 
    
    InsertSelectListbox 用列表框控件覆盖当前选中区。 
    
    InsertTextArea 用多行文本输入控件覆盖当前选中区。 
    
    InsertUnorderedList 切换当前选中区是项目符号列表还是常规格式化块。 
    
    Italic 切换当前选中区斜体显示与否。 
    
    JustifyCenter 将当前选中区在所在格式化块置中。 
    
    JustifyLeft 将当前选中区所在格式化块左对齐。 
    
    JustifyRight 将当前选中区所在格式化块右对齐。 
    
    LiveResize 迫使 MSHTML 编辑器在缩放或移动过程中持续更新元素外观，而不是只在移动或缩放完成后更新。 
    
    MultipleSelection 允许当用户按住 Shift 或 Ctrl 键时一次选中多于一个站点可选元素。 
    
    Open 打开一个文档。 
    
    Outdent 减少选中区所在格式化块的缩进。 
    
    OverWrite 切换文本状态的插入和覆盖。 
    
    Paste 用剪贴板内容覆盖当前选中区。 
    
    Print 打开打印对话框以便用户可以打印当前页。 
    
    Redo 撤消操作,相当于Ctrl+Z。 
    
    Undo 重做。 
    
    Refresh 刷新当前文档。 
    
    RemoveFormat 从当前选中区中删除格式化标签。 
    
    RemoveParaFormat 目前尚未支持。 
    
    SaveAs 将当前 Web 页面保存为文件。 
    
    SelectAll 选中整个文档。 
    
    UnBookmark 从当前选中区中删除全部书签。 
    
    Underline 切换当前选中区的下划线显示与否。 
    
    Unlink 从当前选中区中删除全部超级链接。 
    
    Unselect 清除当前选中区的选中状态。 
     
  ---
  
  
  