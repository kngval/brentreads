import { BookEntity }  from "./BookEntity";
import tltil from "../bookimg/the_last_time_i_lied.jpg";
import tsp from "../bookimg/the_silent_patient.png";
import tool from "../bookimg/the_only_one_left.jpg";
import rps from "../bookimg/rock_paper_scissors.jpg"
import tgl from "../bookimg/the_guest_list.jpg";
export const booksArray: BookEntity[] = [
  new BookEntity(
    "The Last Time I Lied",
    "Fifteen years ago, summer camper Emma Davis watched sleepily as her three cabin mates snuck out of their cabin in the dead of night. The last she--and anyone--saw of them was Vivian closing the cabin door behind her, hushing Emma with a finger pressed to her lips.",
    "Riley Sager",
    ["Mystery","Thriller"],
    5,
    tltil
  ),
  new BookEntity(
    "The Silent Patient",
    "Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.",
    "Alex Michaelides",
    ["Mystery","Thriller"],
    5,
    tsp
  ),
  new BookEntity(
    "The Only One Left",
    `Now reduced to a schoolyard chant, the Hope family murders shocked the Maine coast one bloody night in 1929. While most people assume seventeen-year-old Lenora was responsible, the police were never able to prove it. Other than her denial after the killings, she has never spoken publicly about that night, nor has she set foot outside Hope’s End, the cliffside mansion where the massacre occurred.
`,
    "Riley Sager",
    ["Mystery","Thriller"],
    5,
    tool
  ),
  new BookEntity(
    "Rock Paper Scissors",
    `Things have been wrong with Mr and Mrs Wright for a long time. When Adam and Amelia win a weekend away to Scotland, it might be just what their marriage needs. Self-confessed workaholic and screenwriter Adam Wright has lived with face blindness his whole life. He can’t recognize friends or family, or even his own wife.`,
    "Alice Feeney",
    ["Mystery","Thriller"],
    5,
    rps
  ),
  new BookEntity(
    "The Guest List",
    `On an island off the coast of Ireland, guests gather to celebrate two people joining their lives together as one. The groom: handsome and charming, a rising television star. The bride: smart and ambitious, a magazine publisher. It’s a wedding for a magazine, or for a celebrity: the designer dress, the remote location, the luxe party favors, the boutique whiskey. The cell phone service may be spotty and the waves may be rough, but every detail has been expertly planned and will be expertly executed.`,
    "Lucy Foley",
    ["Mystery","Thriller"],
    5,
    tgl
  ),
] 

