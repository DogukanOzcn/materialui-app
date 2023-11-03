import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../index.css"
import NaviComp from "./NaviComp"
import BottomNavi from "./BottomNavi"


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const temp = [
  {
    classNames: ["icnbtn"],
    id: 1,
    title: "Javascript",
    image: "js.jpg",
    firsttext:
      "JavaScript, web tarayıcılarında interaktif davranışlar eklemek ve web sitelerini geliştirmek için kullanılan bir programlama dili ve teknolojik ekosistemdir.",
    secondtext:
      "JavaScript, web geliştirme için kullanılan bir programlama dilidir. Tarayıcılar (web sayfaları üzerindeki etkileşim ve dinamik içerik sağlamak için) ve sunucu tarafı geliştirmeyi (Node.js gibi) destekler. JavaScript, kullanıcı etkileşimi, veri işleme ve web sayfalarının dinamik oluşturulması gibi çeşitli görevler için kullanılır. JavaScript, hafif, tarayıcıda çalışabilen bir dil olarak bilinir ve HTML ve CSS ile birlikte web geliştirmenin temel taşlarından biridir."
  },
  {
    classNames: ["icnbtn"],
    id: 2,
    title: "Vercel",
    image: "vercel.jpg",
    firsttext:
      "Vercel, özgürleştirilmiş bir ön uç dağıtım platformu olarak bilinir ve web projelerinizi hızlıca yayınlamanıza olanak tanır.",
    secondtext:
      "Vercel, web projelerini hızlıca dağıtmak ve barındırmak için kullanılan bir platformdur. Sadece ön uç değil, tam bir uygulama geliştirme sürecini destekler ve geliştiricilere büyük kolaylık sağlar."
  },
  {
    classNames: ["icnbtn"],
    id: 3,
    title: "Next.js",
    image: "nextjs.jpg",
    firsttext:
      "Next.js, React tabanlı, hızlı ve SEO dostu bir web uygulama çerçevesidir.",
    secondtext:
      "Next.js, React geliştiricileri için geliştirilen bir web uygulama çerçevesidir. Hızlı yükleme süreleri, SEO dostu yapısı ve birçok özelliği ile ön plana çıkar."
  },
  {
    classNames: ["icnbtn"],
    id: 4,
    title: "TypeScript",
    image: "typescript.jpg",
    firsttext:
      "TypeScript, JavaScript tabanlı güçlü bir programlama dilidir ve kodunuzu daha okunabilir ve güvenilir hale getirir.",
    secondtext:
      "TypeScript, JavaScript geliştiricileri için geliştirilmiş bir programlama dilidir. Stati tip denetimi sağlayarak hataları erken dönemde yakalamanıza yardımcı olur ve büyük projeleri daha yönetilebilir hale getirir."
  },
  {
    classNames: ["icnbtn"],
    id: 5,
    title: "Prisma",
    image: "prisma.jpg",
    firsttext:
      "Prisma, modern ve veri tabanı odaklı bir ORM (Object-Relational Mapping) aracıdır.",
    secondtext:
      "Prisma, veri tabanı işlemlerini kolaylaştıran bir ORM aracıdır. Veri tabanı ile etkileşimi daha basit ve verimli hale getirir, böylece geliştiriciler veri tabanı işlemlerini hızlıca gerçekleştirebilir."
  },
  {
    classNames: ["icnbtn"],
    id: 6,
    title: "React Router",
    image: "reactrouter.jpg",
    firsttext:
      "React Router, React uygulamalarında sayfa yönlendirmesi ve yönetimi için kullanılan bir kütüphanedir.",
    secondtext:
      "React Router, React tabanlı uygulamalarda sayfa yönlendirmesi yapmak ve uygulama rotalarını tanımlamak için kullanılır. Web uygulamalarını çok sayfalı hale getirir ve kullanıcıların farklı sayfalar arasında gezinmelerini sağlar."
  }
];

// Bugünün tarihini al
const today = new Date();

// Tarih verilerini çek
const day = today.getDate();
const month = today.getMonth() + 1; // Ay 0'dan başlar, bu yüzden +1 eklenir.
const year = today.getFullYear();

// Tarihi belirli bir formatta formatla (örneğin: "DD MMMM, YYYY")
const formattedDate = `${day} ${getMonthName(month)}, ${year}`;

function getMonthName(month) {
  //TARİH ALMAK İCİN AYLARI TANIMLADIK
  const monthNames = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  return monthNames[month - 1];
}

// Şimdi formattedDate'ı kullanabilirsiniz

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(null);
  const [myData,setMyData]=React.useState(temp);

  const handleButtonClick = (data) => {
    const isExist=data.classNames.includes("icnbtnred")
    if (isExist) {
      data.classNames.splice(1,1)
      
    }
    else{
      data.classNames.push("icnbtnred")
    }
    const tempData=myData
    const index=myData.findIndex(item=>item.id===data.id)
    tempData[index]=data
    setMyData([...tempData])
  };

  const handleExpandClick = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="card-container">
      <NaviComp/>
      {myData.map((data) => (
        <Card className="card"  key={data.id} sx={{maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar alt="Remy Sharp" src="/public/js.jpg" sx={{ bgcolor: red[500] }} aria-label="dogukan">
                D
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={data.title}
            subheader={formattedDate}
          />
          <CardMedia
            component="img"
            height="194"
            image={data.image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data.firsttext}
            </Typography>
          </CardContent>
          
          <CardActions disableSpacing>
            <IconButton
              className={data.classNames.join(" ")}
              aria-label="add to favorites"
              onClick={()=>handleButtonClick(data)}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded === data.id}
              onClick={() => {
                handleExpandClick(data.id);
              }}
              aria-expanded={expanded === data.id}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded === data.id} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Dahası:</Typography>
              <Typography paragraph></Typography>
              <Typography paragraph>{data.secondtext}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
     <BottomNavi />
    </div>
  );
}
