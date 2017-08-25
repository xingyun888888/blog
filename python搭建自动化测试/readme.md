### selenium+python  环境搭建
>selenium 是一个 web 的自动化测试工具，不少学习功能自动化的同学开始首选 selenium 


#### 先看一个demo

```
  import time
  from selenium import webdriver
  
  driver = webdriver.Chrome('/path/to/chromedriver')  # Optional argument, if not specified will search path.
  driver.get('http://www.google.com/xhtml');
  time.sleep(5) # Let the user actually see something!
  search_box = driver.find_element_by_name('q')
  search_box.send_keys('ChromeDriver')
  search_box.submit()
  time.sleep(5) # Let the user actually see something!
  driver.quit()
  
```


