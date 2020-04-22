import React from "react";

import Details from "./../components/cv";
import Experience from "./../components/experience";
import Education from "./../components/education";

export default function Cv() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 DetailsHeading">
          <h1> Personal Details </h1>
        </div>
      </div>

      <div className="row jobcontainer">
        <Details
          firstname={"Remano"}
          lastname={"Victor"}
          number={40557079}
          email={"remanovictor@icloud.com"}
          linkedIn={"RemanoVictor"}
        />
      </div>

      <div className="row">
        <div className="col-sm-12 DetailsHeading">
          <h1> Experience </h1>
        </div>
      </div>

      <div className="row jobcontainer">
        <div className="col-sm-8">
          <Experience
            year={"2016-2018"}
            company={"The Stack"}
            titlelocation={"Mixologist, Cape Town"}
            description={
              "liasing with customers. mixing and designing new cocktail recipes."
            }
          />
        </div>
        <div className="col-sm-4">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA81BMVEXn6OruxM4AAAD////5+fnrxdDyws768/X8/P3txc3uzdb++/3ww87u7/H79vjqx9HyzNR/aG16e3zHx8fGqrDo5+rl6uoAAwH0ydPo6Of1ydMFAAEjIyPi4+UeHh7BwcE8PDy4uLilpaXdusTq0tXs5Ons2uNMTEzV1ticnJ1aWlyCgoLQ0NJPT09zc3NhS1CxmJ4bFRdtXmNANTm+o6guIySahYiMdHoVBQjkvcpUR0mOf4HSsbw9MjWvjpaZeoGfjpQpGB7WrbokGxpcUFMzKiq7naQUFhFKQkOBcXVXPUOEZ29RQkjfwcYrKyx2YWRmZmijaFRgAAAKxklEQVR4nO2dD1PbOBOHbbd261Q+J5AE2SmlYOBIw5VAIAEuDe2VP9f3SOH7f5p3ZQfiJHIsO5JjefybubmZXmLr6a52V9Iqp7wtupQ3RVdJKL98wg/vCqm3U8J3uqHqRZOKKh9eCf9ABjKKpzChrppq0WSqlfdTQhsVkvBDSSi3SkL5VRLKr5JQfpWE8qsklF8lofwqCeVXSSi/SkL5VRLKr5JQfq2TMJt3rYsQY4zsTF62HkKEhyfdqoGyeNd6CO3uqab90nEW78qcEN6Ax2eatqVpvXoV3m+qYk2ZvQ1NfH6hTdQ3sWEKfmXWhGb1aqBNdeJhUzBitoRIrdQftbBOu1hwvMmUUDf0/mUIr0VmY+3KUEVOxUwJXe9EW1SvLjSmZkeIIEdc+DF0Xq0bWxf22gwJDbUWeOYCoKZde66w92ZDaJrIrV8ssE0EZm1BhSPkzVkRIsP+m+qgEyuCGc88QUVcNoR4eLsEMNA3QQFHOCHJ5+boFPhai1NwZjJqNzoW4KqCCREQYu9pufVedT00kMq7xBFtQ2SQMjTGQV91+h0bvIcgmNBE5i+NliKidGbyzhsCCW0dwUq3ByFmdga2SLH2o3tNjz0X9y6ssDgOQyChriJ9FGG/MxtXb2j/AT49sF2eWzgCCRH2aDkCGH6MdNVAuN6jIMLnr+sGx5gqkBB3P9IteP2Pn/kQvqrRzAgBZ8QxNYogRLYNfOPaogFbrS0/7b18EI9+alsLVoY/ePJcZNo2jypHiA1NyBH1b3QXhNJl+pIIRwbd3fPKG0IIEVJvWvQkWBtjFLIMFKx92sfguwMTcSlUhRC642uNOgUfuq5hTzfXwBFVWHRQrE3yS2/IJTXyJiTd/8aINmQwy+0VLYJgsnDcolWtIxchfdXFMW9CSPLeGW1qbWmX/YhNJ4S7tLUj+SvxMFo1cXAn1M/vaBNL0x7rOGIFCHFpfEv/0kVXX3UycibE9iCiihnYOKoYM6F6tfuXFMOTCsdbMTfyJDShTPmXbou785iln1mlfhWg/w2nlzSj4kcIgP0HigG3yBZFNe7Lpuv9ov3dtLSH/kqIPG3o3b4QzepyFB8PwYGRfv+TbsZbb4VRcSSs1uhT8H8eiw0IIh7TdozhmbU4F1j2YG6EZpVeR/eZz17gc/g7NUzVqiuMSzBhr26YCQhNY0gLODwJUz+ITlgbu2oiQtU1KQGHG+E7m4wlJeUcIanCLrrVpA8zkVq9v9Pmth75EZqGmroJZNGGtymTdVD3tYQQ7ptq6iPZBcJ+2g1eQ62OZgMON8L3irNfMVOeH8wT3sNz0q0LyPLkXhSh0lQODis6Yg+A0yfNEdZXWd25dWGEwNhsHOzb4CsJTSkNYROkNA4O95Oey8pDqCiNBnASb/UhkcqWQKQhnAq89RAYWbfYJSQkxiRTEiGmTS8ZCZtB2IHYypLX5CT0JyShrNhkLi51WBkJQ3IOoBQwjWUZRHLCZtNpHJIsGV21yk5I/nEg7lQiM4fkhIEdJ6UAlDumac/PyQIQ+oL8AcHVhNp4PoUUhBCsCJZU/MJ1/kmFIGz6NV2jEVTns1YsBuGMSOEKq9WXZVYBCZvKZC1pFJSwOVln7VeCHboFwlUOjfJBOFlm+TUdWWbhWcKuiv22tlRjywVhWMRbVfe/0Ji2tFbvZohxyka83BEqpBSoLOwIX16PPNdQU1DmjTCYkgcb84Sg07P7cTX5lYr8EUIhoFhzhK1W0HHyc0C8FaEkUxIIw7veaycMNE8YUq8/xq6aoD8GCMPHkPknBN12vahOBZpy5qUshJp2Ubu/Yq0CzPEg3LiYf8LW5Oz726Dut+3FjtdUsV6v+X0rW638EH5dbsOA9bHvVdmOpMzq+PzslDDmhnD3MwMiJJDb7phxxK7udW/z46WK4mxuPMTZsOUnkKc6jjUklHxQ8eLq1aiXG0Kwo7L7zNaY/3swJFOSZUcdr9SjyJkQGK3t9p9MjNrjd08lG5QZ3pLlQehDbrZjp6Tf/Hx5wjwlc0VIIJ2djd+xRiSQF0/nOllmsbds5IOQQB7tPrPdBuoN6irG8hGSsHMUPyWDArvXH2KD5y2LbAgJpHPc+chkyNbjKM0ya+2EBFLZ+brcW1+WWVCd6wCJ+PqreEI/gex9YTKkdvl0bmK+1/OzIPQhj1myJLEkqc5djreTMiIkkM5mh61w1R77Q5XbzafsCH1v3f36icmQlyffPewiZK983SJTQh/yiHVK/jiDeoexSyJHhARSOY6v6YLYevF0b6/srTwJN48si+FjDTIlN2K8dWvSMn43GLqrQfJd43/Z3bYsh+nDsMw6ZXPXXv+fVX6mh/c+zaeNnW0WQ06yZNyCeaIbnB9C0Of2scIKedT+KxaP/EpPvghBX9pHLIyO47BlyVo1b4Tgrc9HzN/b3unErCVzsk8zt1+6meSrMaWA/IQ+5JJSoBCEQdyJmJL/+dej010nzRGhD3lMjTu1im7oKWvUfBEq/oJ5cQ9r4+CwglLucuSOUAnizuzWx4bV8LsGi0JIvHVnjtBvV97er5CfIUhWwuWTULE2FwiJHNIaaSY5TM4toUInJI28pLMliRXlImz4PUpLG3klJ5wIIA8rNpr8MFgMq5SExJaO43crx/cjSUnYeG3JrtgL3diFIAwaef1/+1Ny6XaVlIRh+bF12fUz6QnJLYmgWzmipisC4cuUpBuxAIRkRk6uu+hBW8DMMqsAhK9qgiGJJWcrnkIRghxyl9Aoqg39BDJpyS4qYTAlm8p2cIFg8nOvxSEMyXH8WxKkobVINgyJTEn/mh2xYiEJicuSuLO/D7lDFGE7+ahCz9pblXCiRuOgUnkrhlD7yngIRXnSdkfjRgj1jrAu6N876QZmHc8fSKUmDO5LvhdFqGmdVGbcWzjCWIGQ3LgXSKj9tcl2JPwqx9qmtIun91JfIgm1h3YyQmuTtqufZ0JNe07iqVab+oy8EHaoo9NOd1nHZ21HHLB18kGoKHQDgAnYzGjtRpyStlccFz9Cayfi/O8zS96YT4KJvrxU/AgVaiBkM8NiEpwofeHwKo6EoN2IluAvy7szrMUk6Ot0j8OY+BJaRxHR4tNeNGKk7f88XtmACm9CJTrgRPobPQmCOnwGxJ0wcsBRhWrEX8kDc5qJEXdCxVIiwqLWceZLHCfSrWNmbgLxJySpLaLLaWFiWVGhadUkGJIIQgg4zxFmnAuOwpJgSEIIwfv2IvpHn6feZx1HNPBzSIIhiSFcksN/v0QQR2QSDEkUIQSc5YWq2CQYkjBCUqhGBJzPm5boJBiSQMJoO2ntCPt+4pUEQxJKGL0kootfEgxJLGF0oUq1rAA+4YSK47QZ/89yXJNgSKIJSaHKdLubbxIMSTzh4iY2RQ+ck2BIGRAuKT9fPZR3EgwpE0IwY1Sh6gsWHck2VpMoG0KyURF5B0hEEgwpK8LoQlVIEgwpM0IlYq3EcSVIV5aElB1VUUkwpCwJF3fVhCXBkDIlnN8ZFZcEQ8qYMLz1xH0lSFfGhIrzun3YURKen6ZU1oTKZH/mo9gkGNIaCBVL2RCdBENaByH5EQmBZdqc1kOYpUpC+VUSyq+SUH6VhPKrJJRfJaH8KgnlV0kov0pC+VUSyq+SUH6VhPKrJJRfb6aE2R0lZCjHKTyhNSV8876YChEWWSWh/FLWPVeE6//M6rGzVkeFvgAAAABJRU5ErkJggg=="
            alt="The stack"
          />
        </div>
      </div>

      <div className="row jobcontainer">
        <div className="col-sm-8">
          <Experience
            year={"2014-2016"}
            company={"Sheraton Grand"}
            titlelocation={"Ass. Pool bar manager & mixologist, Dubai"}
            description={
              "Ensure smooth day to day running of pool bar. Drawing up work schedules for staff. Monthly P&L meetings. Guest liason."
            }
          />
        </div>

        <div className="col-sm-4">
          <img
            src="https://www.kindpng.com/picc/m/19-193027_sheraton-hotel-logo-png-transparent-png.png"
            alt="Sheraton emblem"
          />
        </div>
      </div>

      <div className="row jobcontainer">
        <div className="col-sm-8">
          <Experience
            year={"2009-2014"}
            company={"The Westin"}
            titlelocation={"Bartender, Cape Town"}
            description={"Mixing drinks as well as serving tables"}
          />
        </div>
        <div className="col-sm-4">
          <img
            src="https://sisterhoodagenda.com/wp-content/uploads/2015/10/Westin_Hotels__Resorts_logo.svg_.png"
            alt="The Westing hotel emblem"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 DetailsHeading">
          <h1> Education </h1>
        </div>
      </div>

      <div className="row educationcontainer">
        <Education
          period={"2018-Present"}
          course={"Frontend Development"}
          institutionlocation={"Noroff,Oslo"}
          description={
            "2 year front end evelopment course which covers design,HTML & CSS, Javascript and frameworks like bootstrap,LESS,SASS and React.js"
          }
        />
      </div>

      <div className="row educationcontainer">
        <Education
          period={"2004-2009"}
          course={"High School Course"}
          institutionlocation={"Strandfontein High,Cape Town"}
          description={
            "basic high scool program, Subjects include: English, Afrikaans, Biology, Physics, Geography"
          }
        />
      </div>
    </div>
  );
}
