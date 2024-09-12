"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[67897],{926564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=t(785893),a=t(511151);const s={id:"rdk",title:"Rule Development Kit",pagination_label:"RDK",sidebar_label:"Rule Development Kit",sidebar_position:3,sidebar_class_name:"rdk",keywords:["rule","development","kit"],description:"Rule development made quick and easy.",slug:"/tools/rule-development-kit",tags:["RDK"]},i=void 0,l={id:"tools/rule-development-kit/rdk",title:"Rule Development Kit",description:"Rule development made quick and easy.",source:"@site/docs/tools/rule-development-kit/index.md",sourceDirName:"tools/rule-development-kit",slug:"/tools/rule-development-kit",permalink:"/docs/tools/rule-development-kit",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/rule-development-kit/index.md",tags:[{inline:!0,label:"RDK",permalink:"/docs/tags/rdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726169183e3,sidebarPosition:3,frontMatter:{id:"rdk",title:"Rule Development Kit",pagination_label:"RDK",sidebar_label:"Rule Development Kit",sidebar_position:3,sidebar_class_name:"rdk",keywords:["rule","development","kit"],description:"Rule development made quick and easy.",slug:"/tools/rule-development-kit",tags:["RDK"]},sidebar:"openApiSidebar",previous:{title:"Error Handling",permalink:"/docs/tools/sdk/typescript/error-handling"},next:{title:"UDK",permalink:"/docs/tools/ui-development-kit"}},o={},u=[{value:"Start Using the Rule Development Kit",id:"start-using-the-rule-development-kit",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Clone the project",id:"clone-the-project",level:2},{value:"Project structure",id:"project-structure",level:2},{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Create your new rule",id:"create-your-new-rule",level:2},{value:"Import the classes and initialize the objects the rule needs",id:"import-the-classes-and-initialize-the-objects-the-rule-needs",level:2},{value:"Write your rule logic",id:"write-your-rule-logic",level:2},{value:"Convert the rule to XML format",id:"convert-the-rule-to-xml-format",level:2},{value:"Copy over imports for the rule",id:"copy-over-imports-for-the-rule",level:3},{value:"Copy the rule logic",id:"copy-the-rule-logic",level:3},{value:"Add your return statement",id:"add-your-return-statement",level:3},{value:"Testing rules",id:"testing-rules",level:2},{value:"Create your test class",id:"create-your-test-class",level:3},{value:"Configure the logging and rule file",id:"configure-the-logging-and-rule-file",level:3},{value:"Setup the BeanShell interpreter",id:"setup-the-beanshell-interpreter",level:3},{value:"Mock the objects and return the mocked data",id:"mock-the-objects-and-return-the-mocked-data",level:3},{value:"Pass the mocked objects into the interpreter",id:"pass-the-mocked-objects-into-the-interpreter",level:3},{value:"Evaluate the rule",id:"evaluate-the-rule",level:3},{value:"Assertions",id:"assertions",level:3},{value:"Run Maven test",id:"run-maven-test",level:3},{value:"Next steps",id:"next-steps",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"start-using-the-rule-development-kit",children:"Start Using the Rule Development Kit"}),"\n",(0,r.jsx)(n.p,{children:"The SailPoint Rule Development Kit (RDK) is a project you can use to develop rules more quickly and easily."}),"\n",(0,r.jsxs)(n.p,{children:["In SailPoint solutions, rules serve as flexible configuration frameworks implementers can leverage to preform complex or advanced configurations. To learn more about them, refer to ",(0,r.jsx)(n.a,{href:"/docs/extensibility/rules",children:"Rules"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The RDK provides you with the available classes and methods available when you're developing a rule. You can mock out these classes and run your rule locally to test your logic before submitting it for review."}),"\n",(0,r.jsx)(n.p,{children:"Learn how to use the SailPoint RDK in this guide."}),"\n",(0,r.jsx)("div",{class:"text--center",children:(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/b2LvCaH59JY?si=owtL69BIkbuyHyA0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html",children:"Java 11"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://maven.apache.org/install.html",children:"Apache Maven 3.9.3+"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.appsdeveloperblog.com/how-to-install-maven-on-mac-os/",children:"Mac OS installation guide"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://phoenixnap.com/kb/install-maven-windows",children:"Windows installation guide"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"clone-the-project",children:"Clone the project"}),"\n",(0,r.jsxs)(n.p,{children:["You can find the RDK and its examples in the Github repo ",(0,r.jsx)(n.a,{href:"https://github.com/sailpoint-oss/rule-development-kit",children:"here"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To get started, clone the project."}),"\n",(0,r.jsx)(n.p,{children:"To clone the project, you can run this command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:sailpoint-oss/rule-development-kit.git\n"})}),"\n",(0,r.jsx)(n.h2,{id:"project-structure",children:"Project structure"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"src/\n\u251c\u2500\u2500 main/\n\u2502   \u251c\u2500\u2500 java/\n\u2502   \u2502   \u2514\u2500\u2500 RuleName.java\n\u2502   \u2514\u2500\u2500 resources/\n\u2502       \u2514\u2500\u2500 rules/\n\u2502           \u2514\u2500\u2500 Rule - RuleType - RuleName.xml\n\u2514\u2500\u2500 test/\n    \u251c\u2500\u2500 java/\n    \u2502   \u2514\u2500\u2500 sailpoint/\n    \u2502       \u2514\u2500\u2500 RuleNameTest.java\n    \u2514\u2500\u2500 resources/\n        \u2514\u2500\u2500 log4j2.properties\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"src/main/java/"})})," Use this folder to develop your rules before putting them into the rule XML format. Import objects as needed from ",(0,r.jsx)(n.code,{children:"sailpoint.*"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"src/main/resources/rules/"})})," Use this folder to store your rules in the XML format you would expect to upload to Identity Security Cloud (ISC)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"src/test/java/sailpoint/"})})," Use this folder for test classes to test your rules."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,r.jsx)(n.p,{children:"Install all the required dependencies by running Maven install in the root of the project:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mvn clean install\n"})}),"\n",(0,r.jsx)(n.p,{children:"You now have all the necessary components to start writing rules locally."}),"\n",(0,r.jsx)(n.h2,{id:"create-your-new-rule",children:"Create your new rule"}),"\n",(0,r.jsx)(n.p,{children:"To get syntax highlighting and the features from the IDE, this guide shows how to write the rule in native Java and move it over to the XML format needed when you're storing it in Identity Security Cloud (ISC)."}),"\n",(0,r.jsx)(n.p,{children:"This guide will walk through an example of how to duplicate writing the 'Username Generator' rule that ships with the RDK."}),"\n",(0,r.jsxs)(n.p,{children:["Create a new Java class under ",(0,r.jsx)(n.code,{children:"src/main/java"}),", called ",(0,r.jsx)(n.code,{children:"UsernameGenerator"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"import-the-classes-and-initialize-the-objects-the-rule-needs",children:"Import the classes and initialize the objects the rule needs"}),"\n",(0,r.jsxs)(n.p,{children:["Each rule type has inputs provided to the rule. You can view available inputs for each rule type by clicking the rule type ",(0,r.jsx)(n.a,{href:"/docs/extensibility/rules/cloud-rules#supported-cloud-rules",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The 'Username Generator' rule uses the ",(0,r.jsx)(n.code,{children:"AttributeGenerator"})," rule type. See ",(0,r.jsx)(n.a,{href:"/docs/extensibility/rules/cloud-rules/account-profile-attribute-generator#input",children:"Attribute Generator"})," for the available inputs."]}),"\n",(0,r.jsx)(n.p,{children:"In your IDE, import the classes needed, and initialize these inputs within your newly created class."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"import org.apache.log4j.LogManager;\nimport org.apache.log4j.Logger;\nimport sailpoint.object.Application;\nimport sailpoint.object.Field;\nimport sailpoint.object.Identity;\nimport sailpoint.server.IdnRuleUtil;\n\npublic class UsernameGenerator {\n    Logger log = LogManager.getLogger(UsernameGenerator.class);\n    Identity identity = new Identity();\n    Application application = new Application();\n    IdnRuleUtil idn;\n    Field field = new Field();\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"write-your-rule-logic",children:"Write your rule logic"}),"\n",(0,r.jsxs)(n.p,{children:["You can see the completed code for the 'Username Generator' in the following code. If you want to dive deeper into how this rule was written, follow ",(0,r.jsx)(n.a,{href:"/docs/extensibility/rules/guides/your-first-rule",children:"this guide"}),"."]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Completed Username Generator Code"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import org.apache.commons.lang.StringUtils;\nimport org.apache.log4j.LogManager;\nimport org.apache.log4j.Logger;\nimport sailpoint.object.Application;\nimport sailpoint.object.Field;\nimport sailpoint.object.Identity;\nimport sailpoint.server.IdnRuleUtil;\nimport sailpoint.tools.GeneralException;\n\npublic class UsernameGenerator {\n    Logger log = LogManager.getLogger(UsernameGenerator.class);\n    Identity identity = new Identity();\n    Application application = new Application();\n    IdnRuleUtil idn;\n    Field field = new Field();\n\n    int MAX_USERNAME_LENGTH = 12;\n\n\n    public String generateUsername(String firstName, String lastName) throws GeneralException {\n        firstName = StringUtils.trimToNull(firstName);\n        lastName = StringUtils.trimToNull(lastName);\n        String otherName = identity.getStringAttribute("otherName");\n\n        if(firstName != null) {\n            firstName = firstName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if(lastName != null) {\n            lastName = lastName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if(otherName != null) {\n            otherName = otherName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if((firstName == null) || (lastName == null)) {\n            log.debug( "AD Create User Name | Exit from generateUsername method. No last name and first name for user" );\n            return null;\n        }\n\n        if(!StringUtils.isEmpty(otherName)) {\n            firstName = otherName;\n        }\n\n        String username = null;\n        String fullName = firstName + "." + lastName;\n\n        if(fullName.length() > MAX_USERNAME_LENGTH) {\n            int firstNameLength = firstName.length();\n\n            if(firstNameLength > (MAX_USERNAME_LENGTH - 2)) {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName.substring(0, (MAX_USERNAME_LENGTH - 2)) + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            } else {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            }\n        } else {\n            username = fullName;\n            username = username.toLowerCase();\n            if (isUnique(username)) {\n                log.debug( "AD Create User Name | Unique username generated: " + username);\n                log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                return username;\n            } else {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            }\n        }\n\n\n\n        return null;\n    }\n\n    public boolean isUnique(String username) throws GeneralException {\n        return !idn.accountExistsByDisplayName(application.getName(), username);\n    }\n}\n'})})]}),"\n",(0,r.jsx)(n.h2,{id:"convert-the-rule-to-xml-format",children:"Convert the rule to XML format"}),"\n",(0,r.jsxs)(n.p,{children:["The final step required before you can test your rule is converting it to XML format. These XML files are stored under the ",(0,r.jsx)(n.code,{children:"/src/main/resources/rules"})," directory in the RDK. You can find the ",(0,r.jsx)(n.code,{children:"AttributeGenerator"})," template file ",(0,r.jsx)(n.a,{href:"/docs/extensibility/rules/cloud-rules/account-profile-attribute-generator#template",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"Example Rule"})," with the preferred name of your rule, and add a short description."]}),"\n",(0,r.jsx)(n.h3,{id:"copy-over-imports-for-the-rule",children:"Copy over imports for the rule"}),"\n",(0,r.jsx)(n.p,{children:"Copy over the imports the rule needs."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="AttributeGenerator">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\nimport org.apache.commons.lang.StringUtils;\nimport org.apache.log4j.LogManager;\nimport org.apache.log4j.Logger;\nimport sailpoint.object.Application;\nimport sailpoint.object.Field;\nimport sailpoint.object.Identity;\nimport sailpoint.server.IdnRuleUtil;\nimport sailpoint.tools.GeneralException;\n\n  ]]></Source>\n</Rule>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"copy-the-rule-logic",children:"Copy the rule logic"}),"\n",(0,r.jsx)(n.p,{children:"Copy the logic of your rule inside the class you created earlier."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Don't include your initialized variables for the inputs to the rule. These variables will be passed into the rule during runtime."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="AttributeGenerator">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\nimport org.apache.commons.lang.StringUtils;\nimport org.apache.log4j.LogManager;\nimport org.apache.log4j.Logger;\nimport sailpoint.object.Application;\nimport sailpoint.object.Field;\nimport sailpoint.object.Identity;\nimport sailpoint.server.IdnRuleUtil;\nimport sailpoint.tools.GeneralException;\n\n\n    int MAX_USERNAME_LENGTH = 12;\n\n\n    public String generateUsername(String firstName, String lastName) throws GeneralException {\n        firstName = StringUtils.trimToNull(firstName);\n        lastName = StringUtils.trimToNull(lastName);\n        String otherName = identity.getStringAttribute("otherName");\n\n        if(firstName != null) {\n            firstName = firstName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if(lastName != null) {\n            lastName = lastName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if(otherName != null) {\n            otherName = otherName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if((firstName == null) || (lastName == null)) {\n            log.debug( "AD Create User Name | Exit from generateUsername method. No last name and first name for user" );\n            return null;\n        }\n\n        if(!StringUtils.isEmpty(otherName)) {\n            firstName = otherName;\n        }\n\n        String username = null;\n        String fullName = firstName + "." + lastName;\n\n        if(fullName.length() > MAX_USERNAME_LENGTH) {\n            int firstNameLength = firstName.length();\n\n            if(firstNameLength > (MAX_USERNAME_LENGTH - 2)) {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName.substring(0, (MAX_USERNAME_LENGTH - 2)) + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            } else {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            }\n        } else {\n            username = fullName;\n            username = username.toLowerCase();\n            if (isUnique(username)) {\n                log.debug( "AD Create User Name | Unique username generated: " + username);\n                log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                return username;\n            } else {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            }\n        }\n\n\n\n        return null;\n    }\n\n    public boolean isUnique(String username) throws GeneralException {\n        return !idn.accountExistsByDisplayName(application.getName(), username);\n    }\n\n  ]]></Source>\n</Rule>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"add-your-return-statement",children:"Add your return statement"}),"\n",(0,r.jsxs)(n.p,{children:["This line calls the ",(0,r.jsx)(n.code,{children:"generateUsername"})," function and starts to execute the rule. The result will be returned."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"return generateUsername( identity.getFirstname(), identity.getLastname() );\n"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Complete XML Rule"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="AttributeGenerator">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\nimport org.apache.commons.lang.StringUtils;\nimport org.apache.log4j.LogManager;\nimport org.apache.log4j.Logger;\nimport sailpoint.object.Application;\nimport sailpoint.object.Field;\nimport sailpoint.object.Identity;\nimport sailpoint.server.IdnRuleUtil;\nimport sailpoint.tools.GeneralException;\n\n\n    int MAX_USERNAME_LENGTH = 12;\n\n\n    public String generateUsername(String firstName, String lastName) throws GeneralException {\n        firstName = StringUtils.trimToNull(firstName);\n        lastName = StringUtils.trimToNull(lastName);\n        String otherName = identity.getStringAttribute("otherName");\n\n        if(firstName != null) {\n            firstName = firstName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if(lastName != null) {\n            lastName = lastName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if(otherName != null) {\n            otherName = otherName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if((firstName == null) || (lastName == null)) {\n            log.debug( "AD Create User Name | Exit from generateUsername method. No last name and first name for user" );\n            return null;\n        }\n\n        if(!StringUtils.isEmpty(otherName)) {\n            firstName = otherName;\n        }\n\n        String username = null;\n        String fullName = firstName + "." + lastName;\n\n        if(fullName.length() > MAX_USERNAME_LENGTH) {\n            int firstNameLength = firstName.length();\n\n            if(firstNameLength > (MAX_USERNAME_LENGTH - 2)) {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName.substring(0, (MAX_USERNAME_LENGTH - 2)) + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            } else {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            }\n        } else {\n            username = fullName;\n            username = username.toLowerCase();\n            if (isUnique(username)) {\n                log.debug( "AD Create User Name | Unique username generated: " + username);\n                log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                return username;\n            } else {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            }\n        }\n\n\n\n        return null;\n    }\n\n    public boolean isUnique(String username) throws GeneralException {\n        return !idn.accountExistsByDisplayName(application.getName(), username);\n    }\n\n    return generateUsername( identity.getFirstname(), identity.getLastname() );\n\n  ]]></Source>\n</Rule>\n'})})]}),"\n",(0,r.jsx)(n.p,{children:"Once your rule is saved in the XML format, you can begin testing."}),"\n",(0,r.jsx)(n.h2,{id:"testing-rules",children:"Testing rules"}),"\n",(0,r.jsx)(n.p,{children:"Before submitting your rule for review, it's essential that you test it. You can use the RDK to do so."}),"\n",(0,r.jsxs)(n.p,{children:["By default, the RDK uses the ",(0,r.jsx)(n.a,{href:"https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html",children:"Mockito"})," library to mock objects and return mocked results for testing your rule logic."]}),"\n",(0,r.jsx)(n.h3,{id:"create-your-test-class",children:"Create your test class"}),"\n",(0,r.jsxs)(n.p,{children:["Create a new class at ",(0,r.jsx)(n.code,{children:"/src/test/java/sailpoint"})," named ",(0,r.jsx)(n.code,{children:"UsernameGeneratorTest"}),". This class will serve as your test class."]}),"\n",(0,r.jsx)(n.h3,{id:"configure-the-logging-and-rule-file",children:"Configure the logging and rule file"}),"\n",(0,r.jsxs)(n.p,{children:["Create a logger instance with the name of your test class and set the ",(0,r.jsx)(n.code,{children:"RULE_FILENAME"})," to the rule you want to test."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'Logger log = LogManager.getLogger(UsernameGeneratorTest.class);\n\nprivate static final String RULE_FILENAME = "src/main/resources/rules/Rule - AttributeGenerator - UsernameGenerator.xml";\n'})}),"\n",(0,r.jsx)(n.h3,{id:"setup-the-beanshell-interpreter",children:"Setup the BeanShell interpreter"}),"\n",(0,r.jsx)(n.p,{children:"Initialize the BeanShell interpreter for evaluating the rule."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"Interpreter i = new Interpreter();\n"})}),"\n",(0,r.jsx)(n.h3,{id:"mock-the-objects-and-return-the-mocked-data",children:"Mock the objects and return the mocked data"}),"\n",(0,r.jsxs)(n.p,{children:["Anywhere your rule uses data from ISC, you will need to mock out those objects. In the 'Username Generator' example, the objects used are ",(0,r.jsx)(n.code,{children:"IdnRuleUtil"}),", ",(0,r.jsx)(n.code,{children:"Application"}),", and ",(0,r.jsx)(n.code,{children:"Identity"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'IdnRuleUtil idn = mock();\nwhen(idn.accountExistsByDisplayName(any(), any())).thenReturn(true).thenReturn(false);\n\nApplication application = mock(Application.class);\nwhen(application.getName()).thenReturn("applicationName");\n\nIdentity identity = mock(Identity.class);\nwhen(identity.getFirstname()).thenReturn("Tyler");\nwhen(identity.getLastname()).thenReturn("Smith");\nwhen(identity.getStringAttribute("otherName")).thenReturn("");\n'})}),"\n",(0,r.jsx)(n.h3,{id:"pass-the-mocked-objects-into-the-interpreter",children:"Pass the mocked objects into the interpreter"}),"\n",(0,r.jsx)(n.p,{children:"Pass the variables you mocked so that when the rule uses these objects, they return your mocked values."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'i.set("log", log);\ni.set("idn", idn);\ni.set("application", application);\ni.set("identity", identity);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"evaluate-the-rule",children:"Evaluate the rule"}),"\n",(0,r.jsx)(n.p,{children:"Use BeanShell to evaluate the rule to get your rule result."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"String source = RuleXmlUtils.readRuleSourceFromFilePath(RULE_FILENAME);\nresult = (String) i.eval(source);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"assertions",children:"Assertions"}),"\n",(0,r.jsx)(n.p,{children:"Add assertions to your test class to validate that when your rule is given certain inputs, it returns your expected result."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'assertNotNull(result);\nassertEquals(result, "tyler.s");\n'})}),"\n",(0,r.jsx)(n.h3,{id:"run-maven-test",children:"Run Maven test"}),"\n",(0,r.jsx)(n.p,{children:"To run the test with Maven, open the terminal and in the root of the project, run this command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'mvn test -Dtest="UsernameGeneratorTest"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Run all tests in the tests directory:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mvn test\n"})}),"\n",(0,r.jsx)(n.p,{children:"When your test runs, you will see the output of your logs. These logs can help when you're writing logic and debugging."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"[INFO] -------------------------------------------------------\n[INFO]  T E S T S\n[INFO] -------------------------------------------------------\n[INFO] Running sailpoint.UsernameGeneratorTest\n13:02:18.229 [main] DEBUG sailpoint.UsernameGeneratorTest - AD Create User Name | Unique username generated: tyler.s\n13:02:18.233 [main] DEBUG sailpoint.UsernameGeneratorTest - AD Create User Name | Exit from the  GenerateUsername Method\n13:02:18.237 [main] INFO  sailpoint.UsernameGeneratorTest - Beanshell script returned: tyler.s\n[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 1.912 s -- in sailpoint.UsernameGeneratorTest\n[INFO]\n[INFO] Results:\n[INFO]\n[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0\n[INFO]\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  5.046 s\n[INFO] Finished at: 2023-08-01T13:02:18-04:00\n[INFO] ------------------------------------------------------------------------\n"})}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsxs)(n.p,{children:["Have an issue using the RDK? Reach out to us on GitHub ",(0,r.jsx)(n.a,{href:"https://github.com/sailpoint-oss/rule-development-kit/issues",children:"here"})]}),"\n",(0,r.jsxs)(n.p,{children:["Discuss the tool and other rule-specific topics in the ",(0,r.jsx)(n.a,{href:"https://developer.sailpoint.com/discuss/",children:"SailPoint Developer Community"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}}}]);