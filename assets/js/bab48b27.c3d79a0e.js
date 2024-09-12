"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[99738],{108770:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>r});var s=n(785893),t=n(511151);const a={id:"base64-encode",title:"Base64 Encode",pagination_label:"Base64 Encode",sidebar_label:"Base64 Encode",sidebar_class_name:"base64Encode",keywords:["transforms","operations","base64","encode"],description:"Encode data with a Base64-based text encoding scheme.",slug:"/extensibility/transforms/operations/base64-encode",tags:["Transforms","Transform Operations"]},l=void 0,i={id:"extensibility/transforms/operations/base64-encode",title:"Base64 Encode",description:"Encode data with a Base64-based text encoding scheme.",source:"@site/docs/extensibility/transforms/operations/base64-encode.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/base64-encode",permalink:"/docs/extensibility/transforms/operations/base64-encode",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/base64-encode.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726169183e3,frontMatter:{id:"base64-encode",title:"Base64 Encode",pagination_label:"Base64 Encode",sidebar_label:"Base64 Encode",sidebar_class_name:"base64Encode",keywords:["transforms","operations","base64","encode"],description:"Encode data with a Base64-based text encoding scheme.",slug:"/extensibility/transforms/operations/base64-encode",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Base64 Decode",permalink:"/docs/extensibility/transforms/operations/base64-decode"},next:{title:"Concatenation",permalink:"/docs/extensibility/transforms/operations/concatenation"}},o={},r=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function p(A){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...A.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(e.p,{children:"Base64 is mostly used to encode binary data like images so that the data can be represented as a string within HTML, email or other text documents. Base64 is also commonly used to encode data that can be unsupported or damaged during transfer, storage, or output."}),"\n",(0,s.jsx)(e.p,{children:"The base64 encode transform allows you to take incoming data and encode it using a Base64-based text encoding scheme. The output of the transform is a string comprising 64 basic ASCII characters."}),"\n",(0,s.jsx)(e.admonition,{title:"Other Considerations",type:"note",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"If the input to the Base64 encode transform is null, the transform returns a null value."}),"\n"]})}),"\n",(0,s.jsx)(e.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,s.jsxs)(e.p,{children:["The Base64 encode transform only requires the ",(0,s.jsx)(e.code,{children:"type"})," and ",(0,s.jsx)(e.code,{children:"name"})," attributes:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "type": "base64Encode",\n  "name": "Base64 Encode Transform"\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Required Attributes"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"type"})," - This must be set to ",(0,s.jsx)(e.code,{children:"base64Encode"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Optional Attributes"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,s.jsx)(e.code,{children:"true"})," or ",(0,s.jsx)(e.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.p,{children:"This example takes the incoming attribute configured in the identity profile attribute UI and returns it as a Base64 encoded string."}),"\n",(0,s.jsx)(e.p,{children:"Input:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"1234\n"})}),"\n",(0,s.jsx)(e.p,{children:"Output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"MTIzNA==\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "type": "base64Encode",\n  "name": "Base64 Encode Transform"\n}\n'})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)("p",{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:"This example takes a binary image as in input and returns it as a Base64 encoded string."}),"\n",(0,s.jsx)(e.p,{children:"Input:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"SailPoint Logo",src:n(763826).Z+"",width:"2379",height:"783"})}),"\n",(0,s.jsx)(e.p,{children:"Output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"iVBORw0KGgoAAAANSUhEUgAACUsAAAMPCAMAAADR/Oa6AAAAM1BMVEX///8BIWkBIWkBIWkBIWkBIWkBIWkBIWkBIWkBIWkBIWkBIWkBIWkBIWkBIWkBIWkBIWkgvXawAAAAEXRSTlMAMEDAUP+AsCBwoJAQ8GDg0P4grvIAADujSURBVHgB7N3XltpKEAXQQqIkofz/P3uvs92TgMaBYfZ+5ZF0Vp9SVwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPA7HKISAABNG5UAADhmE3UAAOiyjToAAPSZTVQBAKDNbKMKAAD5SRMVAAAY8pM+gAoA0ORnQ1wPAIBTfjbG9QAAmPKLOa4GAECbX3RxNQAAlvximeNKAADM+c0aVwIAoMlvtiidpq7rmqYJAABec8rvmldCVm5t352aQwAAfGxD0419FKb8ro/Slk9sbXdq5gAA+HgO69TmZ20U2vxhePHE6oVEdRwCAOCjGL7HqC+mKCyvvjLn65a2a+YAAHhwh1O/ZGF9NTAtcxTGfNs+rUMAADyoocxRL46YN2XMKjR53jYe5wAAeDTHacsXvTEUtUdpy4vs3SEAAB7GsPb5mi0KU/7q8HLQOm8ZjwEA8ACG055v6KPQ5q/GKMx5jX6dAwDg0YJUqYtCFpY5Cn3mB4lTAADzuudZxzJ7ZWmNwjELD1v2AQAcx7zE8GZY2qO05PWW6RAAAO/J0G15mSh0+cQhClNW2XV9AMD7cezzUu2ZgagpCoestIyHuH8AAHO35eWmMzdILVHas1q7xn0DABjGvMopCvnMGoVT3mDr5rhbAABNm+ed3SBT6KMw5E2WcYi7BACw7nm186dOQxT6vJE0dY8AgHXL6+1RmM63gGverG0CeF8AJKmKDTIvxq05U5oCACSptzbIFA5R6FOaeiQAwHHLWs0Ft0dNUTjm79EPAQDwzzVt1psvmIXa6vfI3PcUOgDA0OYNtos2xByjMObvsnRzAAD8M/OUNc6PnhfG+pLvnGUNAIB/5LTkbbqL2rulvuQ7b2/iEUCbN2nibwOg2fNWzQt3mleWfPXGOf4ykKUAmMe83XymvKso+SospwBZCoB3Ue8Vtih0mfUl3032Q9wjkKUAPL1XMXpeX/LVm+b4O0CWAqDLChWj5xUlX7Wtib8AZCkADnvWumL0vLBU7OR7mKMpkKUAHEpVjJ4XjhU7+e7uaApkKQCGPSvU3HpeGKOwZj7O0RTMzdp1fftJ13XNIEvxbz+Ch7hL4PG98wGpzX9S8hW2/9m7w23HTSUNwwWoEEIA3P/VzlonM3OSOOltGwoK9ff8zkp3742l1wiBoakAjHeZ/8bdB1oKZjH+/GAIdgKAdPJIF/0F8/sP+RpL8fRAwf4/0gSOmPlfnAUtBYuHYCIAGM1mHsrSn5lP5rAuFuMSPYKxl7+da/wqO+e8LzbQShB85V/Jd0BLLYUhGAMBwFCeB/tkDVSll/CSki1tLdnrdpXfUt192UQLQIj8sxh0tRRgCAJAh+R4MPfRBpyG/qKyIL9vRnmX+WP19FqDCmcwxYSWAgnpxomlswHYzKPdHy2Bun/90h+e84USG3dosQQCfS9x5EtBSxWvg7U20EIYggDQ4eLxCv0F/1oT3Pr8VTa0leOuPEC7DwJ5wQmkvWhLOdakuegPS/NgCAYCgF4psoBAf2Y/+8+JhRXaRSonj4N3d+Qd+fMlfGipV9X5wxBMGYIHAUCf0FhA/nBl+/Wy9bmsuGVI6c8puL9Pe7TUi+y8JXl4j+giAOhhM0s4P2yj8+Wpo7CWSLvjZCHxIBkQe9MeLfXCeUPyMAQB4Gtlzsty9cMtFAKLq4Y0C3dmQdUHGg5S4+9EtNQvZeH8xyvZiCmADjcLsZ+m0SGwK8K+awQOx+KiJSWQUswRLTUip8DNXvcAACmylI/fy4svZ0hVllZIpVQqT+EKjQSRv3ehpX6UoyFBGIICAPAtuoP7ePqrDtubcvNvYslnnqYWGgYi9zjQUm9oJZEQPGg4CAA+ZhqL8Z9fqwP9I3OdmcXETUrq+TWFtYc5oKXeke9AIDkEAeADJrOMfL5ssd05wWx9YyEtKS8pedUSaPhAObTUi08OkYOQuU8jAFCRUvU+6IXlN5zSOy3pj6lSeQlnCLo17nWhpXpqCtzkw0oBoMiElPn+jJpMP0hHZAEtkA628TJ3IujjuVsOaKnvawougSEIAJNTKr+G1Ge7mNtF+4Bno/6dSvUbREDI3C+ipT7gE8GfpDx3BSkAlLk7aeeB08vpak+MqSuzPLnzTSHyCAEt9YFcCEYPQUsAsCil6pXoF0LX0ttXJuaHxVRwvF6+6FsQeIiIlsJKv7VD8CQAWJJSpx305wntZqk/pq7MKpyJvgORxwhoKSyW1jcEXwFAmb3ZS5TYKc6eT4mpdLIW2dI3IPEgN1rqQ80QEFHKckPwFQAU4Yd7r6rMhzjER8SUzdt/zYeLB8loKYzZtdf1TADwszJ9y+wktlFc8Hn7mPIsTf45HzQe5UBLfcwlArEhCMb2MARIqTGHjxz8riSwUbjumEoOz0yw7PfPbrQUnk2vHYKRYODHwxEgpcYc43aPud6L11RONJupLE88KuHiYSpa6hsXruxCQxDQUq/ArjgQtwkvfEhx1+NkjswqFYKPnDxOQEthMmX9EAS0FIifwZd9ovcl+VEXzi1jqrCE+TEFmcc50FLyH97nqfj4o6U2g5SKiT5x8PvoW9bxCI0mulmvm+B9gQfyaKnvtIBNOfBiJFoK5KW6ZKfhe875BSVv9qQg4pHJU1geyKGllCz0wxAEtNQrSG3NCVht0grSdPMAN1IKMfWpCy2FmHrQEGwEaCkQXZx4J9nJ55N6mMb9ClIKMbV0j7D1LYWYwhAEtBSI3bybpc8d/IGs4GC7Ayn1WVXCjZZCTKGl3oKWAmw/4ifcZwL1CY57ZYOUQkx9xKGlEFNrnWgptBTMcCzbDrvJTgoJTE3VhJT6gyVASyGmMAQHQUsBdkPw9J00fel3cNqXXl7735cALaVUTqQSWgotBXiFr9pJE2JOxdqBSJIKb6MmArRUP2zaiWd8aCnAB+1M05bl6jjmrpAcwxtxBFh73guDFmvP0VKAz1nuKYvGnzE0Qorcx5CUlHknNwH2ROiDQYuWQksB1p23nq5IXTNCgb5WtD7caryXgwB7dSqHN1AL9upES4GwkHuf73U4ur5SOrPsOZ9b8goflvLiAI8TLYWXJnCGDFoK1Gnc46Iud9fA8z3XxOQUnu9ZsPrkgRLONn7qSxMYgv3QUoB1sdlSn9r1qN5yDsuWBNv5c4RiZHMaKo9zoKUGOKkfhiCgpWDIYqlmqE/oXPXd+YJz0fZwq/GGciCY90Z6QkthydTaxQOBAC0FAydCXKJOpfMa6DpjymRVnwGPd8x/gJW/ldBSWr4BYAgCWqofRkFc8mXJ/z0+GnUwTdHDLYPv+A8VeJgbLTWGw4KpMRd+QEsB+cULEHPnyLPdH+3UE1MGT/jwLt/kX61BSw1y4TkzlkuhpWD5REhZ9Odn+rP+rfdS1HIaxYXND3+CJyyV0FJLn/JhCGYCtBSMmpPJZVk9pNdRXKhH1NEQKfO+AsGUX65HSw1zYggOuOgBWgru1Xvdue6L/j1i1jmq2Bgh4rb0I7xGFdBS41hc7ruHIKClwK5OKepf5nAM+QsVBXv+WdyWfoTV55HQUopeSMMQBLQUpLo6pY7+KeYwZvVzWT/h7fBW1I8wMRXQUiN5TEx1DhRAS8G9OqXoHjD06phl4GX1pcXiecmPsFwlElpK0QuoGIKAlgK7PKWoDXiN5Bz0GS+Ln/I1bNfzcJ675YCW+h7WUV/DhyCgpaAtT6nA3/mXy4NfFFOeBii8PUMgnMsXoaUGC7jpd1ztAC0FXiql5PvB/sv0WlmUMwarpTD5/waTuU8jtFQPjNowdggCWgpCXp5SdA7ZJXTc3y2u+yxYfMX/CXZLzAEtNR427Pz+8g9oKXAKjg/IQ6aZW+/Spf6YujAthel/+Xf5DkJLjRcxBL/9GgtoKTgUfJbsmH0h48BRGRe9DRT4CTIJwkXXE1pKQsAQxEp9tBTM3VrqooHuMWPPD/ywp7bmu23kRzgIxE5tioSW0jSdiiEIaCnwGj5Ljb/1i+mtsuZCY0T3fcFBMriTRdLUUthjCkMQ0FIQNNwqA49pqTR0caTJCz4OhaVU5721gf6XsdbfLrOURDJwJ4uElpJS6AsYgoCWgpO/0RKNdI267Oehf0uz4HrcWEK7j0T/KB13YwkX/QRSFLiP6W+p7LrgVL6RRgxBQEuBVbHh7TlqXY4bO3tWpu9+Hni8syT6pVBOHq4RSHyLKLR9SznqFKx3Wc3xRxiCgJYCp2Jb62GrRf3gyZF79grWiwerV6I3BF/xTtQKtvInqiG01B+OmLEtwgimdwgCWgqKikUFx7CWKqOrz01ewdp4KGfpbaXiId8C6eb33YnQUv9VnILV5xiCgJaCquKrWxw2+Ozo04ZTnbr3SphYUq+ujDf5FrCO39MsEVrqo58dVp/LD0FAS8HVse58oDpu8A2/o5upz7cuHicX+lQ6eSCCkVOCtRChpV6UzEM5+giGIKClIOWOdefjGO7x01k014rejOvPjzkTfeHIK7brhOLev42hpQS+AGCd3/HlEAS0FHgdd0g/sKXc+IXy57wLclr/qCI0HuUmeJ+5K/+bHC0RWkp2agrr/MI3QxDQUpCyjhtk4x7mZemVhiVTUWgRvvwZ7skt2hUBjG//vDcY/QpaikzmITBsjXf8qv5iCAJaCryKxVIURl73vcBaeTNtYurmMVqgDnHd1udgr9s5/kNz0dtEP0FLUWprduzHEAS0FKQ8YWcp+fXWx88zO2VBdEb5GTqx4HX69z0EtJRUTBUCQEuBaCFcNN458mh3K7Jc3k2amOIhalJyY/IEstBSAjF1EgBaCt6VspKL4NgbtsjfO+QpE1NWfq2UwL8XF4b10FKUKg+SCQAtBYLTUjmIb73e3SwyMyTXlIkpr2YrggM3pb2gpchknMkHaCmYrip5W/gce2F2Muu83IyJqVPPTgRxr616AC1FBzOeTQNaCuYqWn7PeUpLtTT/qVdYsfS8JoEnwPq/4ANaim5sfQ5oKf0wLRVUfpms711Pb+pzTfh6q+klpGuzL/iAlqKG048ALQVTWS03xjj4wuel5kia+JHzRtVX6sr9IsE8aCmDBVOAllIOv/FKIvLglipSD7+M+ByRVXUGXhEtO0BLCbixYArQUjBR0PJd7eBu7wbJPf06XeVf45ML3pTxIt9m0FIpY4cpQEvBPFHL5SWOnpC3YjWYsvAs0a3rXNa42cITQEtR4REqAaClQCILciAReXRLkdwrbkU4QB13C8oWnxiCidBSVHEkH6ClYJZLywqCgye2FN/Tl5+HuS3VtN2WLMFMaKmCxeeAllILGyLURCLu8de9LHeJtLIbZ2budWt7/noQzISWoorF54CW0gobIhTFF77r/bHcqM8puvha2wn3B+5J20FLXYzNPAAtpRNWnjeSYQS+QzrBe3sQrRtty5PCdi0FaKmEnc8BLQVTJDXLB+7ZLcVhcoW6qS1FY+XdWgrQUhSx8zmgpVTCynO309qGW/KfEgRXn1t1dwC33UY9gJY68CIfoKVghqZlWupggZbyokuKvNzMjFV3j7rxrGQ7aCnKeJEP0FIgz6j5/cYFLZXT3J256sYt5fdrKUBLRfmzmADQUnCr+Y6WeYT4WQDck/vC7NtSZb+WArTUgU0RAC0F8qqWX+/BQ7gPV4PZuRNTcV5LNeonX3eAlpKFlgK0FIg71ExLRZGWssLFEfkzeebac7QUoKUcY+ACWgqERTW/3bympbjMfZXvQEvBRGgpj5YCtBRIy1pWYR68qKVymhqjcV5LWRoq2V6GYDa01MHdGgGgpWDgdaaSlLiqpfieOjGV57VUwfgGtFTCZp2AlgJhUcvtOfGyluJAPZzMzF7AMWKAlhoho6UALQWqLjM5kZCysKUc9TiECoe7ZQJASzm0FKClQJTlz9wk5ZRqKfmFRVWmcLDF4AjGXv52zvF/ZedO762h3wNaKio9RCZZ6310zvFfuP+Mz8Mm+hYkW/zp3N9+rLcvNqClNMBGnYGEBF7ZUnXqgYZ2RkvhIZ8p3lX+lXb6I9DToaW8utc4zOFPxz9qzhdDnwHrz8q/0KK3CS01FlQtZ9NeUi2V+B0XdUgyk3uN+wX6LaXjdvymel6GJkFLoaVCuR1/pEUE1buMd2//UANaahgwap4ZNamWognrwKLIu5AOE1NfdlTlD+WzBNocWkr/9iLhOjN/Jf9c/HDEzJ9ot0VLjQGXlg0RAq9tKfYzr9Vh3goyQ7+VcDn+UrvCj88Oukj+z4v2lkJLpSNW7pJjSSRCfnxb38XSj8ydv/qZGvqSf0vlHnXM5x/kOS0rz+/VLZXDxEell8STCXyxCb5xl1aS4C9E8rftVLcUWiqVk4dwVyAB4uPbC5+HWFxHrwT6BiviaC1IalbfVF67Xoo5TpzfO4fvEoFTWdPVeIBo6RVaCi0lFVL9xY+WSj73furRUl3g0HKQwiE3rOyMUAz8mcF3ADzlO04epRa01LiWQkvZmHm080BLvZRUF2fRUh3g1nIkSVTQUnHi7lh24k7w2Tx/SqrySNkntNSIlkJLpVJZRPUBLfVSUgI1hZYCgZfnEglJmce5v72OWvpekXjwlnmIlujJQsw8WvYJLfWcljq4mxUYmp2iJbRUyTyMM2ip70DQsrlU4YH8ty3l5q08a4PeDEBMmcgiakFLdbUU9peykYW54zdvKeN4qDuhpWBCwhSS4uRbSnpi6hSY4vM8SDX0TNaxmPYyHNBSaKmOoSmhlt+4pdLNo+UDLQXyq5QSCQmso6XcvC61c1fk54MeKEQWdSe01CNa6uRuHSUlqx6/a0vZygLOhJaCjzUlj/i8kpZiO+0hn+9tTGyNkCJLqxYt9YSWctytI/KlOftbtpRnGdWgpUD29l9IStXSUm7ad183/QfTAj2KzzzBjZZ6QEvx1JZKN092ht+upUJjMRdaCkTfbgnyf48hjo5tNO207TqnbxXB2dNz2MpztICW2r2lzNSWKpnn8+n3aimbWVBMaCmQ++i0lcu2Oi78ftKQDAILporoI6t9hZOnyQdaavOWKtyt0ZuM4yXq8Tu1VGFZLaGl4ANOx4KbxMItNWliqo2fRw7ySyt2dGWeqaCl9m6pe969yvMyZ/htWiqytGrQUvA+JUeRXJpaKs66Yscv+ww1FRxPFtFSW7dUm3WvMpUXytfv0VIpsrxs0FIgs4ogk5TKY6WexOEw6aCKuuxrriu0s5J5uoiW2rilwqzXYD0vdqbfoKVS4xmyQUuByCqCk4RYHqzvUh9nzfOljt7tlO9Am0onrxDRUvu2VJnTUqHxcvl4fEulxnNkg5YCiWdSFwmJ4i01a2LKCazMqiyjXYl00f0QJaKltm2pk/sdAvOlIu6Ht1RqPEs2aCkQuPUb+WONx6idl3o/6VJ0rV7Lel6BNnPxMhEttWlLJR7ACnwllNHCo1uq8Tw5oaXgHTqWSxXpUdX5AfqAFXiYGFhSuw02On/ThZbas6UKy28vlRqrke2DWyryTC2hpeBnQcdyqaatpbjQtyR2rHEsq94H6afhfnWgpbZsqcb9Mv2SyazJ9diWunmuEy0Fo2dRrl1WnnPsneGvk56a0lsKi8vxIPXW36+yQUtt2FJW/lZVWJn40JYqPJtHS8HgD44lGVF69NvedaYf8BIr0DJPkM+SsBXCD9qNltqvpaJ4nHhWp6UntpTh+SxaCsZeY0hGYvGWmjguD4lk8zzJWQKpVViBjJbarqWC+FOzyAq19LyWSpXnywktBSMfSLl9Xsyy/X9CmHLd9h25KaRdgVS6WSP9LYWWitKzE5FVyuZxLXXyCidaCkYulL7l9zyXP0JGfr/OLPGnRJ6pebPVHCpaCi0l/x5skn8hQj6mNm+pwmtcaCkYON1RSITl8VL/bTgnTXN9gSert0FKoaUe0VKOR6jyKSUfU5u3VMq8Rk5oKRiXMZZEnDzeiItpmbL4XHFK5HggpdBS27fUwUOc8iklH1Obt9TJq5xoKRi3mJdEBB6vjXiK2KZcujt/TPI5lZBSaKmdWypVHuKSTyn5mNq7pQ5ex6KlYNTYbhP+DvJbdcqfmGNkJvs8L3KWhJRCS23bUrfszdSxctk8pqUqr1PRUjDq8dpJIrL82Z5h6mZ3JNNSKfMy7gpIKbTUli118CDbDs1sHtJSmVe60FIw6Aro99kzyA9Z3Z5nnFfh5X9SSl/tkx8jaCm0VMg8htu38lvS31L65YSWgjG7ERSS0FjAMWYDqzJhts8Lle+D1qIXRkuhpVaf33htPDRbQkv182gpEHsa1c+yBDtmxcRJX/FC49/wcjmWRJMZRkuhpZa/JGzknh/Ki2ipfjmhpWDI9lIbrYQZdaEP8vMoTiDSZMVjj+OM0VJoqcij5L2H5o2W6ufRUjBkUogEBJZQR22sfsn/WLPAA1FpOVoS1v+QBi2FloqiMzup8j4KWqpbTmipAdBSjgT4KWOqI8rkA3HPx131DjTFyd9BS6GlomyLON5INmipbhda6p/BtfoXlTJLuIetyTLyy9CE2lOeKyTP81fQUmip5HigtPvQbAkt1auipWDA0Pb7vKF1DftTbvpGllvS71iRLDM51Z/BaCm0lGk80Ln/0DzRUt0OtJROaKnK61/jE3jI5+RaKmVWxR0kKGW0FFrqK1fmkcoDhmZBS/U60VLQv56g0HAHy0jjrvNGWUuRYWVqSboO+EdLoaWC47HSA9bxZYOW6hXQUiB/z1dzq6wDT6m5xef7ru13rsw+kYiL0VJoqc8lz4OdjxiaDS3V60JLKYSWMnOGVOAOVd+z05vVyXfQsbMUWgotlXwWfzwWMu/Io6U6VbRUN7RU2ubEWj/ySaJR11IUWaEY1h8vhJZCSx2Rx8tPefhs0FKdDFoKet83o9ECCzlGfoBv6XVg/inbV94J2yGsbCm0VDrilE1WqPCmGlqq042WAvF9kNQ8qwojL/NN+k3+SE+JqezTigP+0VJoKWsPfzaWEh7zeumFlupT0VLaoKVSZhn5ZfatS1C4n3xqrFIueIcPLfU4btZDdnk5oKX6GLQUvFr6e/I8a+l5n0u+pZ4TU1wtjXHwM6Gl9lMetIFsREv1udBSuqClUmYhfuzahlN4JZh72JG/Z6ABUkVLoaV0qI/6t1q0VJeGltIFLVVmXSxu7iT/g31WTGWPhedoKZXkj6TSr6Gl+iS0lCpoqcpS0uA36w+dP9jUWKtmqFPgp0JL7SYn+SvXTAUtNfB+YN/SuEez7zEEi5iFLVVmfe9K3OtWGqkpslqe+kS0FFpK51i+eHMVLTV9lxyH+aZnswt/n5WlxNFrmKvaCb/ID52aMvxYaKnN5PS047YLWqpHU9RSgJY6pl0pbu4WtLYUFdbLYz8EtNQD+MflQEVLdUl6WgrQUo7FhOEHkRT5lnrikXUuCQxM5dBSmJbSr6ClehxqWgrQUnbal67E/aLelqLUWK1s1U5Luf+TWQBaCqulNKtoqR5eTUsBWsrxvOVS/arqFyRv1strK22upz8M/Vmw1+1YHlrqCdlR+QkKWqqD09JSgJayLKcIlEbQ3FJ0ZFbrTIqW1NdYAv0L6xtaCi314pi4QDE7d/s/OFdZUH1gS7XTF2sD/YeRPJ8xa2kpwJ4IjuUEge+RRXVLUXCsVgtK9paqt6FfC8WxJLTU/lMQTSzzL0t/Y4rcfOnxrJY6L0v/IB13ZQEBLQXyt/zlz3Ak7su39h/slVmrbDRMS0VL7wi+sjC01E7MjCvXWQL9G6EacA9qqbMk+ncmZh7N6mgpQEs5lnNLzMk39T/Y4FirXFYf1Fh9oreVxjLQUvuvMo7yJTCnBjg8pKXyz5/tdFUey6toKUBL2YnrG04egj6TBH6wG09NFfrExWPVQp+xjQWhpfZR0+vneqh8B3pHqTzYvayl5EvqRfKZR4oqWgrQUm7iPmo8ht1gUX84nxFTlUfKF32uVLQUWur1X3xNK4EX1vFQ+QktdSd6Uzoln5CipYA/scW0lJPZXt1v8YKkrQ84wsrOv9q+Sh4thZa6ZTPfp5Wf7rJ9S1VLHyiZx9HQUoCWcizoktl76RRsqUjj+Mw6RXpX1HEooGksAy21i5okT4l0Ye2n+9y9pVwa9IlGS/WDvKClLEsKMl8kq+C/0dNAKbJOZcHKc79+D1S01L6M4IjIZfkbJmHvloorj4iwaCno+A0nyT9TpnnMouMs/fSW0r9sqsw+rTlb6mMzC0BLbeKiv8sLJqXkVmxdW7dUFDpvCy0lDy1lN5iWuqW+SFr5lhrGuo1j6hz4CKBXaGipXVtK4BnYIXWZ+oSpPEjbuaXi2sNLPVoKlreUY0lGaq3oJddSF9HvUVNm8G4S8qvQkuN+aKkd1SS3kq/oOMw87NtScfEPDy0FPZMAh/5pqSy2VvSWbFQB9txzB/Sy9nYld/9ES8kTHqtV9GMwf0xe27ZUo2+ZzCOcaClY/SyqsqQotlbUSbaUiBBZm5Y6614+peRjCi21g4NeGNmUmj8mz11bKgf62sEjOLQULG6pwqIOsXDLcsVoSUjwmXU5Jz3iK0TrYwotta9LrgOMnjGZNm2pizqcaCkBcM3+hdZNH/ExJ7l9uwSVxqr4Kd8ay7pFhWiplUQX2zX5lJocU8eeLeWoR8o8AFoK1u7PXVjfIz6B2aOwpKXkD0aV/zFG+ZSSX6+KlnpiSiXp8T9/diXu2VKGuhS0FCxuKaZeKbMoKzgJVqR+rJmEpdJYjZzE5y1vGixkHgYtpV+TmzItqgK/btlSkTpVtBQMl+a2lGdRVfKVQS/1zceRPHPXLZZMGe53rvnKgZYStf4NiVs+A6a/kBZ2bKmg4elIQktBx8Ieq3xa6pZcNHxKNaOjKY6YWYVDdlfnlmi8m/uhpbZOKWrKxubB/cqGLRWpWx3+CAQtBXnmBlM3yzKS5eakFjN4EqA4p3ISXQViSELjfmipnVMqsbaxGblb3LClLHUraCkYzk286weW1UTXuVepO68nAZpzKv6Q9l0uEmF4ALSUfmeSmwbyNFSq3Kvt11KV+qWMloLRzokrUSLLumQv7lJPTg+ay/rGa1m52nYk5OZuaCn9osoKkMu7tF1LXaun9NBS0D+2G/WwLCwR/Q97Z7YwraoD0QgEUEF4/5c9w77c0z9YoWNb6/4buhVcFiFYpmDNKIALspx2HUM/x7DL3qugwL/K0qXcc1p+viBo8P+Tf5eqn7ZQuhQBFPviBz6QYlycFYxGapOPsO1RP8VuFf5kMeNy7FJ0Kfu+J91hZFr1LvlpLjUEQqdLgSFhWe3ktXh/2PicS2WkoFqSzuGq/Dzifi+eoRjoUk7pm6m2VMFz6E3K01zqFAgHXQoMqcs6zQ21ZVir2w4oQvM3TOpVupujZAC5gs9gii7ln9lMKxQOgQMwvPk0l0pOBnOmS5E/seqlIKsx2XpqzzbaWASP+2r03iyeDMNB/xC61EM5jeevIOIxmHqaSzWQhNKl0JC45pK27r/yHDV6mumg/I5q9Gzx7n852qdBl3oUPRlLS3Taq2N7lktNATHoUgRMWVPbc6gxh/nfO21Kz5N4YdvLZ4Op7LhaCufndCl/lGb7LLTz/Kn3SM9yqUNAFLoUAZOXFJ9vak0wj8Gir6/UhnROXcKOF+7T13sHXeop9GS+wNu9VvHlZ7lUFhCZLkXApCWN0uLio913xRNtPqxY4L8afeDvkirGXIqALvWEUOrP4PMUDA3/j3l2qSAgAl2KgKkrzuC/VneGGZ90qTsS6IQtzw8ccdxBOu31uUWXcsgIKx69yWtYGp/lUpuA2OhSBM2CnVJtLE45khoQTUZpEae0q6glBf3uv3srLqRL+afnJTFGdxuWjme5lMCgS6Eh0X4dJavfhgj43GNHjMkX6FQFvypWb6cE0KXcc7Y1U1jxuyPCv0vZOGmnS4Ehp/l2lLp6V1hQE0zCiyCuaddcVn0e3C3xgW2PLuWLo656HdzFjvEGl8I7RaRLgSGX+QtWVAcNEQCYhMdNvFPPrhZM7GrFKQvoeh+6lHeTwp8UuYkdh94i0KXoUhDIZh2yJjWnLsnBLCorhjwBm3CqQufZ5K8bG13KLT23hY/C7m53KV2q0KXQEOM3rDa+JJZSi9WAIs8gRIWzQ+fZ5q8bG13KKfOS73kUbi9yqSwwMl0KDYm2d3N2HUvhXWre8ok32dRELlYMh93Y6FIe6ce2ekXoFEv0FpkuRZfCQE7TEt9NvyWWUotC+yDPIUzFUoHTTXS4IE6X8ke5PuAru1gy6VJ0KeKBZLqWEr8mllKL6gV5FHtXJBfwVskeF8TpUq7o5Wofue5BLIl0KboU8UCzPKTz8h1L4b2nfPUYacXwykX4qz+eTpd6qEvNM8nv49mlTroUXYq4YNhVS7f+PbGUGojpKU/j6gpjAKeb4LG4kC7lg3lc9ZN5pJiS6VJ0KeKCw26Rr3xRLDUMcrgkj6NOKw0edCm6FJpRcmjyj9ClIl2KLgWCXGaLfEG/KJaK673UJe0wKpjCdUOkS9Gleiz5ghm2Z5dKdCm6FHFBtTpbqo0viqU04tc051ODTBAn7nkla8h0Ka8u1eMflJxzCGi19uxSgS5FlyI+GEZhyqnm9GWxlEZ8xHfKu2Uq0qXoUo94YHj+YHQpuhRxwmGzyLepPXldfVbE14cleblM0aXoUnSpm9Cl6FLECcnmwk41p7d19VkFvotP5bFEhVDpUnSpr3epLmjoUnSp9RC8AlTAzeqv2yNg9OyvGSGtK4JAl6JLfYdLsV6KLkWXItPgPtrUnvHnfM2SDP8ed3kuCf+d6h0q9/HRpexgTwS6FF2KwO+rgfMz6OQ+1JIdro+bPJgCdin2l6JLrYcuddKl6FLkY0e2Jh8rfOXWChv+aX3gldQvVQFE9j2nS32/S1X2PadL0aXewUCXYW+6gLr0vJqAriE65dEcrlxq/+hAoUvRpXi2MV2KLkUO9IvWXN8P4VBbKvoc5ySvD6Y6bLrJXp+pdCm6VKJL0aXoUu8gge+krPaMtjYJE7A/dnk4E/ylRv+zTaVLvdOlpvoVfaVL0aWIGzrUAzZdQFp7hsVAb00+5OHsYLE40JcHT6BLvdOlIqqwE0/TWyS6FF0KCDkU2Pu8jfWF55caE9Eb25IIF/k22OzWnLaXokvRpaZjvw90KboUEJKQMcCp9vS1heeqB9gsujwegDIHwOy2UE0LXeqdLnWoW9HPdCm6FHFEx82rQRewr9a3DJ5tD3k8BetSF7hPjgGDLuXfpTwKi982HY0uRZdCQg7Y1W1d7YnL9S2BD1VJ8ngy1qWC3mF6XdWkS9GlstjR9RZCl6JLISEJNrEWXcC2vAXDhh2aXX6GGm7ju/g84HYsVDHnoku91KWC3mK6/c8GXYouhYV00OXddQF5fQsGcCx1rEp+NjEjeDrcWC8xp9Cl6FLOCqZOvUWkS9GlsJATkwNsXe2Zf0pvupozwSMzrV9Fc+9S3ft80+lSL3Wppl5Ff+gtCl2KLoWFbJCmKW1+YIUvqj0FG0uN9bbi36Wi80W+pHSpl7qUYKYPPJveI9Ol6FJgyEBMracuYP/wqiJgYJ7LbCU/x6UO6CfFc9ClXutSUX2K/qn3uOhSdCkwZAdc4KQLiOtX+FQDNJbSusxWzue4VEaW0eJpSpd6rUsV9Sn6Xe8R6FJ0KTCk3h+Hta/v0ilRV9Cg4zKus5X4HJdK6rr6fKdLvdelsroU/UtvInQpuhQaUm5f4fmBc/h2XcHAWui1zlb0OS61qetgatCl3utSSV2KftR7DLoUXQoOSXe15tQFHJ9Y4dMCraPpbWFzyPCUXp0i6jmYupQu9V6X2tSj6Ae9SaRL0aWIgxfvsb5YarZPrPDpDp1mD/lZ1HPx+Yl2qeg5mBp0qRe7lKhH0Y96k0yXoksRDzlDXp4QbX/+l9ewQYdJXelSU3DAPbZi5Szbx1J0qXe6VHQYTAW9S6JL0aWIh41KvS0ultoByTt4gkiWI2Pqfarj1pVgX+lVrBh0qVe71Kl32R3ek5UuRZciLhroHGsTogPQGRR8L7dhmfZHnH8CwIss+jcW+8yWLvVKl7r0Lr25uyeH0KXoUsTH0zGsTIhmu+t+eB3J+LAf/AmH3x4BHZ50JTGhdrrUu12q6m2Ku3uy0KXoUsRJUcBcWAPetz+vrq1iQ06xGTHiHfjFxOd9RZ2u8kWlS73bpRCLvMnb+NvpUnQp4iXI3td1ebrwWcHP0ZFjpLfVR8BFsaAa/Ge701L7XelSb3epQ32Jftb7bHQpuhTx8vLV6yqtOdHvZYAeBpfxoS5BEQSnHRE0G5RgHQJnU7rU613qUleiH/DviHQpuhSBcf3edS5qT0Q/ywHF4q1bb6tTr8FU6wYuJR1+tQC0QZeiS1X1JPpbR3UgpkvRpYiTJ+Ql6QN150nX0eQfKOaz6cDLIIZsEpgdHj/tVLoUXUqGo3uzTQVw0aXoUsTR3u9eu5rTN/R7GSCZT/bdnooi6M1euiH1Ghf6XgFwKF2KLoUKwi8/KqWVLkWXIp6Cqb7+ROM2dR078LuKiCHvoO/SYeMVTd3J1KF0KboULgm/3KjUFLoUXcoMktUjF/wBB4iSyoIy8ID3QQTBajKP3mTqULoUXeoPukK4nKiUZroUXYqYBlP+OOB71AFLfPuKQdEUxObwJjnsug9cYJWiS9GlimK4fKiUbnQpuhR5VzBV7qciN9iBO2kCoPDZQW+bafbNVgWxY1WKLkWXuhTEgdvBd4MhdCm6FHlVMDUbvEknYIlvrhkTJ/5bdGMYwdAd9WhylxaVLkWXgmfEGtvnhU5PuhRdyhSSnatUm7qSCHScsL7i1UCmDgVh+6yYm9xjG0qXokvhF/lUe5DfohWFsdGl6FLkTcFU3+AzGqC6Ia3aTdfwUupFpaLx5+273GHvSpeiSxn1tDub/DqpK4wpdCm6lC0ku1apU9fScEUL1b42yXx7WzsURTZ++VeNVUQwCQBdii4lXXH0S36RWhTITpeiSxlD2lA/bPA1IECdaJvrSk53/Px9gzoVRjB/+deeYaEUXYoudSqSGOQXaFmhNLoUXcoacvltLLXpYgJumavaH6xrXZGdur1VDEUykvw6YarSpehSgLEIsqmau0IpQpeiS5lDhluV6rqWgYuKsouLMYL8NrWsmM3zf9m7s/TGUTAKwwfQjxBi2v9mu0Yn6QwVJwaE0PnuenLHT8XWK0DQ+4L1OmdEaClaqsW7fF1JAZ+nvdRO01K0VPuYHpRSIUvntmqzUDHUmFiokHf4XjY2+cN9XZDalYT706sILUVL9Rqxj37BP1N7lupl0FK0FOuQGZNSRToXQ7XN8tIoEwsSbcDXS1nq5jpukJntfYAMqYjQUrTUR0VpUFyTw7uFZc/SokRL0VKsR04GKB0vPF9tZX6psMt4RU05fKlgs1SudMLjLZMCPmnxUYSWoqUOeMY5Gpt0wFNBL3bN0qgYaClainVpH5BSXrrnqp2GpfHtNmmQX3B3i+97Z2ykTcVqfJRL62eQoqVoqSCNK+ZnRRpnQUvRUt3ihp2klKk2AbWO9/2dd41bBwzWhGOW6xmb9GtG6ftGAGgpWgpeZijQUrQU61QajVKb9E/X+iqNbsjv77huCh8XtDXSqPXI5XrRmNX+yhuT5e5oKVrKyQR50FK0FLvG8vM0gu1KtU+gHfixSuOt1vh/Wm+2rTKW8Z8jpaVoqTkHphwtRUuxbqmrU6qYpdZPUfBYRTpkbkmH8jGQp6VoKQ5MedBStFS/mL0kpYzx1mrtqs57ajxWktmyh4zE0VK0FAemoqOlaCnWsZCvQ6li1pugGohmx6NlmayAUw5M0VK0lIty7ixoKVqKXWD386i7UaoYbzetGw8O5YBH22SuPD7J0VK0FAfsWxTDBSxFSzGOZkfVnFLxzyhU6DTPtoy/RUXv3KAzKbQULTX7h3EDLUVLsfm/NHJDSmXjbdKq85KllffCr/OnvWDRUrQUkpy4DFqKlmK9W6R3JeBVqZahHB4oVRxS54opd95pTVqKlkKR86ZpKVqKzT/LZ6pSKprVbtodeye68F74df7MFyxaipbSctpW0FK0FJv+WT5fiRDZ7FZrVGtr7YZL0SI63JOipWgpHldatxhoKVqKTXgHFs3f0zw2/auHKVWM3bQbaHQuB94Lv84ecsGipWgpLj/fQEvRUuyQ9kabOSV9h3lsA0R1pZRoVGuVkerAy5BpKVqKK0krZkBL0VLs3Ossb6uXdGXE5BuiWhVK1Y8c90VYzj4UR0vRUlgnmF2npWipjjEVa5yeu2h8teA/oZm3WqF1qlQ9HJkbdhrcn6WlaCmuJK1WAi1FS7GT7qay61B7PKgYm3RAl3Ssdhv4eGaShef9B0VpKVqKz/KtoKVoKXbWjRGiqjgeZLxd1HkcufAksDdtR7xjWoqW4lEyOdBStBQ7slDkkVKNmUXjrXbnUqTseB1n+cwha3xpKVqKO3Yq0FK0FDvzkimPL5eOVNQtV+SRCle8Vpj13GkpWqpD8w8Tb6ClaCl27gOoivvWBbTcFHVMOnZmwwW2CViOuPunpWgpLpnyoKVoKXb2s2Tigi8UTDZ2USdfDqHRIiVnbp9nKwhaipbCJqepBFqKlhogVjpeRR2Oz5XqI+pcMlU6zDDTUrRUv/yEk+u0FC3FRj40oSicqCXKY3l+fb8phgNmmGkpWorrz6MCLUVLsUm27NxwlsLabET98UKRk6ZGHIujpWip+T+NCbQULTVILMmjGYdTpHODEXWuP08jj8XRUrTUvDPQCbQULcUm2psubhi/sMvDKX59v2k7YmKTlqKliCkLWoqWGijm5QJDU0tucRtITPkjfvdoKVqKmPKgpWgpNt3aAIuRc+sp3uJyNUohFFqKlhozJUPnQUvRUmxCTGWNYdvioWy4vzQ/pfpjipaipeb7NHrQUpNaKqTdFMlm3RzYJYezV4ch06XNiXPElO8GeVqKluqfjjJqHrTUnJZyXp4zGuyKmIo2YLjc2mh/YWLKH7Fej5aipbhmyoOWmtFStzdQzM/kV2sAu+IRVDlhrIKVU1EKWOIElGqHKVqKliKmEmipKS0VjIiUFPC7xd/2Y2UXXBuQNQbKxlZHNfBpvm32Pd9pKVoKKo9PKVpqFkuFIhITnlOFmLoapoac4k1Z6hRV76/v8UuTzWzGnZaipc6wni9q0FJzWsqLFPfmb+UAdk1MidFTSeotpXiARVSzzWxqS0vRUu8UvAxVUaCl5rTU8tdNyf4suSdMebBztctEmkq5lxv6f30fX3GzDcZtoKVoqfezMlAmgJaa1FJZRL141f3pzlqBnSsv9SoJxxVslDEoNeexvz6gesHIgXnQUrTUCZ4H2QFaalJLLbc/XiPRmHj7afTFB6aIKclbwCE5H6Udpbi1TUxo0n4kpWgpWurjVJEhigtoqWkttYq4v69qgFAkPv1PwC6NKYneoXvL2mFhUIeCkTErarrb/xJoKVrqX4V97Kl1WmoCS0VZ8WwpJJFwW8mswa6NKRGT0LOwZWlBKS7TeGoPaJYzR1FqeEvRUpznswAtNa+llMj2ylL4nROxYFxnGXd1ziGpG6U4s/CirOfzowdoKVpq9IHirEFLzWwpLaJfWMplyfjT3+8oxgM9y+bQPLVHaUEpziy8aA/z+dGDlqKl7mmLx3/0aKlpLbW8sFQ0RUQWPNuKEVNdOKX23HwTJQ5NFT3h1GYCLUVL3Zdbj//o0VKzWmp7ttSrBw1oKWLqFacUmqT33G2Rdf9slDGK24R+jAq0FC11d0uWA4oWoKWuNMf3s/J6UTo7YTpKm/K+oG4u+dh0RfLxOS8j5MOEkykmgJaipb5QsNK91YGWuoSl0tM4lHkxYh7e+7kYT0c3VqNOYdlL04e7RkkbOTrjJtz4PW7A2JaipTjRZzRAS13AUhDxT5YKWUQ9L6RKeC/GvemMXQIeyqW9SMs8pxYOPRJImR4+pKVoqbHvbXICaKlrWOrF5pwG6vlMYy/i8FGMp6Pn1eqAb6QWa6I0bsdgpTy/pLpesWLqda2hpaip1pKipSaw1CaSniyFdPvn7uSfIealQ9HsVivcmV7savo+3EVNGT3lO7YBQ1uKlqKmcgJoqetYKkSJ4clS8H9v6VdO8Z09K92Kxlib9Puq0lpvdjdGuhU1hiwZ6Z13U75j74CRLUVLUVMlAbTUlSwFK7LiZ7vZAYTVGAUkkYJzx1KUI8rmqTj2gXP90146lm2Y8orlHUBL0VIjHaL+ulUDtNTFLIUi4t/ZoUjh5DGV5YKtAQPnbJY+rcucVyzvAFqKlhrw/M9b2TqAlrqepVwUMe71+0lgPILqhFmM3uKleWVzGKaQSsOhNlqKlnog5aPUzS8AaKkrWgoqisRnSac8DaXYLtcqLjhBIa3SsLwrdKj/aYtrAkBL0VLj3tysKQC01FUtBWfkZ8ZuOtk13q5IjIumHo9LpTpzquxq1CtWbDDURkvRUh1+OTtAagZL0VKvn17eAxi37TxfPuBEhcVnqdu6OQzcsmf5XsUqALQULdUsZctj9zALbtFSF7YUcPtej2YLYBMVvFyjmHC61LbG/of7HP+GGwjR6Ydq+eKfOFDphwptXvuWwmUKy26+6aiA1jn9UC1f26FO/X8S1eqjobQOYJzn4/xeZ15keai4Wj3pG+4rRMb05ovcXVmtxjVijLkiMzfBxHTQdi3yjbKxi8P5cp+/YbNvCowdkFqsN1n+UTT+Rzv3gS4hCoQBEEFaxlGZ+192c877kqnqEHw/nWIc0q0AYX/vEi/4r9YyxZbTubX8iLmU9c9X9HNLsLMl5y0i5vKLOSIeObd0S0Du7nOeRcs54llKedU/WH98zbc8pKtp/2H4Z08AsDwNnf8RAIDSVGkJAEBpSlEKAFCaMikFAFjoO4c+pq8EANBKvYxY0hcDABi7mXMAgDdbQnsPAODt2lTPbd2zvQcAkEs9sbklAIBdbb2eVBkSAMDutrWeUMnpCAAAlljryfSc3gQAQJrqW3oTAABpqmzpaAAAlkc3JwUAcOWdvjmntwAAcG9qdU8KADi6Nq/1kPpjSQAAh7dsr3o405hOAgBgOFZxqkdLAACKU28xj+l0AABa9Lq7si3pnAAAhmevO3o9WgIAEKcEKQDgtoZ41S82bS0BAFxF26a1fpE+j0sCALiYHKV+tnXS2QMALmsZo3xmjhoSAMDF5Zh6/WCveRsSAMBNLB8XqF7zIycAgPvJW5Re3+w1xTgkAIBbG3JEKWv9z3qZY8stAQDwiyXnLeJZvtPrH7xKKVNEjDknAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAX3wLCQPn4tw1oIAAAAAASUVORK5CYII=\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "type": "base64Encode",\n  "name": "Base64 Encode Transform"\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Base64",children:"https://developer.mozilla.org/en-US/docs/Glossary/Base64"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Base64",children:"https://en.wikipedia.org/wiki/Base64"})}),"\n"]})]})}function d(A={}){const{wrapper:e}={...(0,t.a)(),...A.components};return e?(0,s.jsx)(e,{...A,children:(0,s.jsx)(p,{...A})}):p(A)}},763826:(A,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/sailpoint_logo-8f1465731caf6a8260bb192c55d7f7dd.png"}}]);